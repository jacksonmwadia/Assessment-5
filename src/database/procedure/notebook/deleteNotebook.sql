CREATE OR ALTER PROCEDURE deleteNotebook(@user_id VARCHAR(100))
AS
BEGIN
    UPDATE notebook SET isDeleted = 1 WHERE user_id = @user_id
END