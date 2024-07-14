package com.example.medichart.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

//@Entity
@Getter
@RequiredArgsConstructor
public class User {

<<<<<<< HEAD
//    @Id
=======
    //    @Id
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 소셜 닉네임
    private String nickName;

    private String role;

    @Builder
    public User(Long id, String nickName, String role) {
        this.id = id;
        this.nickName = nickName;
        this.role = role;
    }
}
