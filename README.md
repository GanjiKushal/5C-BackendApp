This is a 5C Backend Github API Application where we can search,post,get,update and delete the data of users.

1.Installation 
    --Download the zip file and extract the files into your computer.
    --Open the folder through vc code and open the terminal in that.
    --Type npm i in the terminal and click enter so that all the dependencies will installed.
2.POST API
http://localhost:8080/add/:username
here you need to give github username in place of username.
Where username should be given as param, so that API will seach for user data and it will be added to the database.
Eg:http://localhost:8080/add/GanjiKushal

3.GET API's
http://localhost:8080/alldata
--You will get entire data for users present in database with this API.
http://localhost:8080/alldata?username=""
--You will get data of the specific user.
--eg:http://localhost:8080/alldata?username=GanjiKushal

http://localhost:8080/alldata?company=""
--You will get data of the specific users with the given company name.

http://localhost:8080/alldata?sortby=""
--You can sort the data by sortby
--Eg: http://localhost:8080/alldata?sortby=location

http://localhost:8080/friend/:username
--You will get the friends data of user
username passed as params
--Eg:http://localhost:8080/friend/GanjiKushal

4.PUT API
http://localhost:8080/update/:username
--You can update the data of the user
--username given as param
--Eg:http://localhost:8080/update/GanjiKushal

5.DELETE API
http://localhost:8080/delete/:username
--You can delete the user.
--username given as param
--Eg:http://localhost:8080/delete/GanjiKushal

