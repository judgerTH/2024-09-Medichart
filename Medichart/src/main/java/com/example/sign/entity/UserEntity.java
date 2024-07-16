package com.example.sign.entity;

import com.example.sign.dto.UserDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
@Table(name = "user")
public class UserEntity {
    @Id
    private String userID;

    @Column(length = 100)
    private String pwd;

    @Column(length = 100)
    private String userName;

    @Column(length = 100)
    private String userEmail;

    @Builder
    public static UserEntity toUserEntity(UserDTO userDTO) {
        UserEntity userEntity = new UserEntity();

        userEntity.userID = userDTO.getUserID();
        userEntity.pwd = userDTO.getPwd();
        userEntity.userName = userDTO.getUserName();
        userEntity.userEmail = userDTO.getUserEmail();

        return userEntity;
    }
}
