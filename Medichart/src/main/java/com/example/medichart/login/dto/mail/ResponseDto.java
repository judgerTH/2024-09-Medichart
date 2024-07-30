package com.example.medichart.login.dto.mail;
import com.example.medichart.login.dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDto<D> {
    private boolean result;
    private String message;
    private D data;

    public  static <D> ResponseDto<D> setSuccess(String message) {
        return new ResponseDto<>(true, message, null);
    }

    public static <D> ResponseDto<D> setFailed(String message)
    {

        return new ResponseDto<>(false, message, null);
    }

    public static <D> ResponseDto<D> successWithData(String message, D data) {
        return new ResponseDto<>(true, message, data);
    }

    public static <D> ResponseDto<D> failureWithData(String message, D data) {
        return new ResponseDto<>(false, message, data);
    }
}