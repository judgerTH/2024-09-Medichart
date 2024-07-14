package com.example.medichart.entity;

import com.example.medichart.dto.InsertMemberDTO;
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
    public static UserEntity toUserEntity(InsertMemberDTO insertMemberDTO) {
        UserEntity userEntity = new UserEntity();

        userEntity.userID = insertMemberDTO.getUserID();
        userEntity.pwd = insertMemberDTO.getPwd(); // 비밀번호는 비워두기
        userEntity.userName = insertMemberDTO.getUserName();
        userEntity.userEmail = insertMemberDTO.getUserEmail();

        return userEntity;
    }
}
