package com.seenit.server.controller;

import com.seenit.server.ibprojections.UserDetails;
import com.seenit.server.ibprojections.UserIdName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.validation.Valid;

import com.seenit.server.repository.CommentRepository;
import com.seenit.server.repository.PostRepository;
import com.seenit.server.repository.UserRepository;
import com.seenit.server.model.Comment;
import com.seenit.server.model.CreateCom;
import com.seenit.server.model.CreatePost;
import com.seenit.server.model.Post;
import com.seenit.server.model.User;
import com.seenit.server.model.VoteCom;
import com.seenit.server.model.VotePost;
import com.seenit.server.dto.EmailResetDTO;
import com.seenit.server.dto.PassResetDTO;
import com.seenit.server.exception.ResourceNotFoundException;
import com.seenit.server.payload.*;


@RestController
@RequestMapping("/api")
public class UserController{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Quick test
    @GetMapping("/users/test")
    public List<UserIdName> getUsers(){
        return userRepository.findAllByModeratedChannelsId("1");
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserDetails> getUserById(
    @PathVariable(value = "id") String userId) throws ResourceNotFoundException {
        UserDetails user = userRepository.findUserDetailsById(userId)
        .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("/users")
    public User createUser(@Valid @RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("/users/update/{id}")
    public ResponseEntity<User> updateUser(
    @PathVariable(value = "id") String userId,
    @Valid @RequestBody User userDetails) throws ResourceNotFoundException {
         User user = userRepository.findById(userId)
          .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
  
        user.setEmail(userDetails.getEmail());
        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
   }

    @PutMapping("/users/resetPassword/{id}")
    public ResponseEntity<User> resetUserPassword(
    @PathVariable(value = "id") String userId,
    @Valid @RequestBody PassResetDTO passwordDTO) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
        boolean result = passwordEncoder.matches(passwordDTO.getCurrentPassword(), user.getPassword());
        if (!result) {
            throw new ResourceNotFoundException("User given current Password does not match database password");
        }

        user.setPassword(passwordEncoder.encode(passwordDTO.getNewPassword()));
        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
   }

    @PutMapping("/users/resetEmail/")
    public ResponseEntity<User> resetUserEmail(
    @Valid @RequestBody EmailResetDTO dto) throws ResourceNotFoundException {
        User user = userRepository.findById(dto.getUserId())
            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: " + dto.getUserId()));
        user.setEmail(dto.getNewEmail());
        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
   }

   @DeleteMapping("/users/{id}")
   public Map<String, Boolean> deleteUser(
       @PathVariable(value = "id") String userId) throws Exception {
       User user = userRepository.findById(userId)
          .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));

       userRepository.delete(user);
       Map<String, Boolean> response = new HashMap<>();
       response.put("deleted", Boolean.TRUE);
       return response;
   }

    @GetMapping("/user/checkUsernameAvailability")
    public UserIdentityAvailability checkUsernameAvailability(@RequestParam(value = "username") String username) {
        Boolean isAvailable = !userRepository.existsByUserName(username);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/user/checkEmailAvailability")
    public UserIdentityAvailability checkEmailAvailability(@RequestParam(value = "email") String email) {
        Boolean isAvailable = !userRepository.existsByEmail(email);
        return new UserIdentityAvailability(isAvailable);
    }

    @PostMapping("/save/{userid}/{postid}")
    public ResponseEntity<User> savePost(
    @PathVariable(value = "userid") String userId, @PathVariable(value = "postid") String postId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
        Set<Post> savedPosts = user.getSavedPosts();
        savedPosts.add(postRepository.findById(postId).get());
        user.setSavedPosts(savedPosts);
        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/unsave/{userid}/{postid}")
    public ResponseEntity<User> unsavePost(
    @PathVariable(value = "userid") String userId, @PathVariable(value = "postid") String postId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
        Set<Post> savedPosts = user.getSavedPosts();
        savedPosts.remove(postRepository.findById(postId).get());
        user.setSavedPosts(savedPosts);
        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/upvotePost/{userid}/{postid}")
    public ResponseEntity<User> upvotePost(
    @PathVariable(value = "userid") String userId, @PathVariable(value = "postid") String postId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
        Post post = postRepository.findById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post not found on :: " + postId));
        Set<VotePost> votePosts = user.getVotedPosts();
        VotePost newVote = new VotePost();
        newVote.setUserVote(user);
        newVote.setPostVote(post);;
        newVote.setIsUp(1);
        CreatePost createPost= post.getCreatedBy();
        createPost.setPoints(createPost.getPoints() + 1);
        votePosts.add(newVote);
        user.setVotedPosts(votePosts);
        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/downvotePost/{userid}/{postid}")
    public ResponseEntity<User> downvotePost(
    @PathVariable(value = "userid") String userId, @PathVariable(value = "postid") String postId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
        Post post = postRepository.findById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post not found on :: " + postId));
        Set<VotePost> votePosts = user.getVotedPosts();
        VotePost newVote = new VotePost();
        newVote.setUserVote(user);
        newVote.setPostVote(post);;
        newVote.setIsUp(0);
        CreatePost createPost= post.getCreatedBy();
        createPost.setPoints(createPost.getPoints() - 1);
        votePosts.add(newVote);
        user.setVotedPosts(votePosts);
        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/undoUpvotePost/{userid}/{postid}")
    public ResponseEntity<User> undoUpvotePost(
    @PathVariable(value = "userid") String userId, @PathVariable(value = "postid") String postId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
        Post post = postRepository.findById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post not found on :: " + postId));
        Set<VotePost> votePosts = user.getVotedPosts();
        VotePost newVote = new VotePost();
        newVote.setUserVote(user);
        newVote.setPostVote(post);;
        newVote.setIsUp(1);
        votePosts.remove(newVote);
        CreatePost createPost= post.getCreatedBy();
        createPost.setPoints(createPost.getPoints() - 1);
        user.setVotedPosts(votePosts);
        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/undoDownvotePost/{userid}/{postid}")
    public ResponseEntity<User> undoDownvotePost(
    @PathVariable(value = "userid") String userId, @PathVariable(value = "postid") String postId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
        Post post = postRepository.findById(postId)
            .orElseThrow(() -> new ResourceNotFoundException("Post not found on :: " + postId));
        Set<VotePost> votePosts = user.getVotedPosts();
        VotePost newVote = new VotePost();
        newVote.setUserVote(user);
        newVote.setPostVote(post);;
        newVote.setIsUp(0);
        votePosts.remove(newVote);
        CreatePost createPost= post.getCreatedBy();
        createPost.setPoints(createPost.getPoints() + 1);
        user.setVotedPosts(votePosts);
        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/upvoteCom/{userid}/{comid}")
    public ResponseEntity<User> upvoteCom(
    @PathVariable(value = "userid") String userId, @PathVariable(value = "comid") String comId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
        Comment com = commentRepository.findById(comId)
            .orElseThrow(() -> new ResourceNotFoundException("Comment not found on :: " + comId));
        Set<VoteCom> voteComs = user.getVotedComments();
        VoteCom newVote = new VoteCom();
        newVote.setUserVoteCom(user);
        newVote.setCommentVote(com);
        newVote.setIsUp(1);
        CreateCom createCom= com.getCreatedBy();
        createCom.setPoints(createCom.getPoints() + 1);
        voteComs.add(newVote);
        user.setVotedComments(voteComs);
        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/downvoteCom/{userid}/{comid}")
    public ResponseEntity<User> downvoteCom(
    @PathVariable(value = "userid") String userId, @PathVariable(value = "comid") String comId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
        Comment com = commentRepository.findById(comId)
            .orElseThrow(() -> new ResourceNotFoundException("Comment not found on :: " + comId));
        Set<VoteCom> voteComs = user.getVotedComments();
        VoteCom newVote = new VoteCom();
        newVote.setUserVoteCom(user);
        newVote.setCommentVote(com);
        newVote.setIsUp(0);
        CreateCom createCom= com.getCreatedBy();
        createCom.setPoints(createCom.getPoints() - 1);
        voteComs.add(newVote);
        user.setVotedComments(voteComs);
        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/undoUpvoteCom/{userid}/{comid}")
    public ResponseEntity<User> undoUpvoteCom(
    @PathVariable(value = "userid") String userId, @PathVariable(value = "comid") String comId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
        Comment com = commentRepository.findById(comId)
            .orElseThrow(() -> new ResourceNotFoundException("Comment not found on :: " + comId));
        Set<VoteCom> voteComs = user.getVotedComments();
        VoteCom newVote = new VoteCom();
        newVote.setUserVoteCom(user);
        newVote.setCommentVote(com);
        newVote.setIsUp(1);
        voteComs.remove(newVote);
        CreateCom createCom= com.getCreatedBy();
        createCom.setPoints(createCom.getPoints() - 1);
        user.setVotedComments(voteComs);
        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/undoDownvoteCom/{userid}/{comid}")
    public ResponseEntity<User> undoDownvoteCom(
    @PathVariable(value = "userid") String userId, @PathVariable(value = "comid") String comId) throws ResourceNotFoundException {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new ResourceNotFoundException("User not found on :: "+ userId));
        Comment com = commentRepository.findById(comId)
            .orElseThrow(() -> new ResourceNotFoundException("Comment not found on :: " + comId));
        Set<VoteCom> voteComs = user.getVotedComments();
        VoteCom newVote = new VoteCom();
        newVote.setUserVoteCom(user);
        newVote.setCommentVote(com);
        newVote.setIsUp(0);
        voteComs.remove(newVote);
        CreateCom createCom= com.getCreatedBy();
        createCom.setPoints(createCom.getPoints() + 1);
        user.setVotedComments(voteComs);
        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

}