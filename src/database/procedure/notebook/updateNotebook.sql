CREATE PROCEDURE updateNotebook(
    @user_id VARCHAR(100),
    @email VARCHAR(200), 
    @content VARCHAR(200))
  
AS
BEGIN
    UPDATE notebooks SET 
  
        email=@email, 
        title=@title, 
        content=@content, 
       
     user_id = @user_id
END
