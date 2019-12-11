package com.seenit.server.controller;

import com.seenit.server.dto.UserDetailsDTO;
import com.seenit.server.ibprojections.UserDetails;
import com.seenit.server.ibprojections.UserIdName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
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
    public UserDetailsDTO getUserById(
    @PathVariable(value = "id") String userId) throws ResourceNotFoundException {
        UserDetailsDTO user;
        try {
            UserDetails u = userRepository.findUserDetailsById(userId).get();
            user = new UserDetailsDTO(u.getUserName(),u.getCreatedAt(),u.getEmail(),u.getPoints());
        }catch (Exception err){
            User u = userRepository.findById(userId).get();
            user = new UserDetailsDTO(u.getUserName(),u.getCreatedAt(),u.getEmail(),0);
            System.out.println(err);
        }
        return user;
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

}