/*
package com.example.medichart.login.dto;

import com.example.medichart.login.entity.mail.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class InsertMemberDTO {
    private String userID;
    private String pwd;
    private String userName;
    private String userEmail;

    public static InsertMemberDTO fromUserEntity(UserEntity userEntity) {
        return new InsertMemberDTO(
                userEntity.getUserID(),
                userEntity.getPwd(),
                userEntity.getUserName(),
                userEntity.getUserEmail()
        );
    }
}
*/
