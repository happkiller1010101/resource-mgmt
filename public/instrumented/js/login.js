function cov_23ingh3esg(){var path="C:\\Users\\Justin\\OneDrive - Temasek Polytechnic\\Documents\\DVOPS_Projects\\resource-mgmt\\public\\js\\login.js";var hash="1fa7b44f481ddf78d8638c770ca315e8b69bf88f";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\Justin\\OneDrive - Temasek Polytechnic\\Documents\\DVOPS_Projects\\resource-mgmt\\public\\js\\login.js",statementMap:{"0":{start:{line:2,column:17},end:{line:2,column:19}},"1":{start:{line:4,column:17},end:{line:4,column:29}},"2":{start:{line:5,column:2},end:{line:5,column:58}},"3":{start:{line:6,column:2},end:{line:6,column:64}},"4":{start:{line:8,column:2},end:{line:11,column:3}},"5":{start:{line:9,column:4},end:{line:9,column:76}},"6":{start:{line:10,column:4},end:{line:10,column:11}},"7":{start:{line:12,column:16},end:{line:12,column:36}},"8":{start:{line:14,column:2},end:{line:14,column:39}},"9":{start:{line:15,column:2},end:{line:15,column:63}},"10":{start:{line:16,column:2},end:{line:25,column:4}},"11":{start:{line:17,column:4},end:{line:17,column:48}},"12":{start:{line:18,column:4},end:{line:18,column:26}},"13":{start:{line:19,column:4},end:{line:24,column:5}},"14":{start:{line:20,column:6},end:{line:20,column:54}},"15":{start:{line:21,column:6},end:{line:21,column:41}},"16":{start:{line:23,column:6},end:{line:23,column:74}},"17":{start:{line:27,column:2},end:{line:27,column:41}}},fnMap:{"0":{name:"login",decl:{start:{line:1,column:9},end:{line:1,column:14}},loc:{start:{line:1,column:17},end:{line:28,column:1}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:16,column:19},end:{line:16,column:20}},loc:{start:{line:16,column:31},end:{line:25,column:3}},line:16}},branchMap:{"0":{loc:{start:{line:8,column:2},end:{line:11,column:3}},type:"if",locations:[{start:{line:8,column:2},end:{line:11,column:3}},{start:{line:8,column:2},end:{line:11,column:3}}],line:8},"1":{loc:{start:{line:8,column:6},end:{line:8,column:53}},type:"binary-expr",locations:[{start:{line:8,column:6},end:{line:8,column:26}},{start:{line:8,column:30},end:{line:8,column:53}}],line:8},"2":{loc:{start:{line:19,column:4},end:{line:24,column:5}},type:"if",locations:[{start:{line:19,column:4},end:{line:24,column:5}},{start:{line:19,column:4},end:{line:24,column:5}}],line:19}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1fa7b44f481ddf78d8638c770ca315e8b69bf88f"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_23ingh3esg=function(){return actualCoverage;};}return actualCoverage;}cov_23ingh3esg();function login(){cov_23ingh3esg().f[0]++;var response=(cov_23ingh3esg().s[0]++,"");var jsonData=(cov_23ingh3esg().s[1]++,new Object());cov_23ingh3esg().s[2]++;jsonData.email=document.getElementById("email").value;cov_23ingh3esg().s[3]++;jsonData.password=document.getElementById("password").value;cov_23ingh3esg().s[4]++;if((cov_23ingh3esg().b[1][0]++,jsonData.email=="")||(cov_23ingh3esg().b[1][1]++,jsonData.password=="")){cov_23ingh3esg().b[0][0]++;cov_23ingh3esg().s[5]++;document.getElementById("error").innerHTML="All fields are required!";cov_23ingh3esg().s[6]++;return;}else{cov_23ingh3esg().b[0][1]++;}var request=(cov_23ingh3esg().s[7]++,new XMLHttpRequest());cov_23ingh3esg().s[8]++;request.open("POST","/login",true);cov_23ingh3esg().s[9]++;request.setRequestHeader("Content-Type","application/json");cov_23ingh3esg().s[10]++;request.onload=function(){cov_23ingh3esg().f[1]++;cov_23ingh3esg().s[11]++;response=JSON.parse(request.responseText);cov_23ingh3esg().s[12]++;console.log(response);cov_23ingh3esg().s[13]++;if(response.message=="Login successful!"){cov_23ingh3esg().b[2][0]++;cov_23ingh3esg().s[14]++;sessionStorage.setItem("email",jsonData.email);cov_23ingh3esg().s[15]++;window.location.href="home.html";}else{cov_23ingh3esg().b[2][1]++;cov_23ingh3esg().s[16]++;document.getElementById("error").innerHTML="Invalid credentials!";}};cov_23ingh3esg().s[17]++;request.send(JSON.stringify(jsonData));}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjNpbmdoM2VzZyIsImFjdHVhbENvdmVyYWdlIiwibG9naW4iLCJmIiwicmVzcG9uc2UiLCJzIiwianNvbkRhdGEiLCJPYmplY3QiLCJlbWFpbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiYiIsImlubmVySFRNTCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZW5kIiwic3RyaW5naWZ5Il0sInNvdXJjZXMiOlsibG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9naW4oKSB7XHJcbiAgdmFyIHJlc3BvbnNlID0gXCJcIjtcclxuXHJcbiAgdmFyIGpzb25EYXRhID0gbmV3IE9iamVjdCgpO1xyXG4gIGpzb25EYXRhLmVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKS52YWx1ZTtcclxuICBqc29uRGF0YS5wYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIikudmFsdWU7XHJcblxyXG4gIGlmIChqc29uRGF0YS5lbWFpbCA9PSBcIlwiIHx8IGpzb25EYXRhLnBhc3N3b3JkID09IFwiXCIpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIikuaW5uZXJIVE1MID0gXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZCFcIjtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgcmVxdWVzdC5vcGVuKFwiUE9TVFwiLCBcIi9sb2dpblwiLCB0cnVlKTtcclxuICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIGlmIChyZXNwb25zZS5tZXNzYWdlID09IFwiTG9naW4gc3VjY2Vzc2Z1bCFcIikge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwganNvbkRhdGEuZW1haWwpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaG9tZS5odG1sXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yXCIpLmlubmVySFRNTCA9IFwiSW52YWxpZCBjcmVkZW50aWFscyFcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiIwcEZBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlosUUFBUyxDQUFBRSxLQUFLQSxDQUFBLENBQUcsQ0FBQUYsY0FBQSxHQUFBRyxDQUFBLE1BQ2YsR0FBSSxDQUFBQyxRQUFRLEVBQUFKLGNBQUEsR0FBQUssQ0FBQSxNQUFHLEVBQUUsRUFFakIsR0FBSSxDQUFBQyxRQUFRLEVBQUFOLGNBQUEsR0FBQUssQ0FBQSxNQUFHLEdBQUksQ0FBQUUsTUFBTSxDQUFDLENBQUMsRUFBQ1AsY0FBQSxHQUFBSyxDQUFBLE1BQzVCQyxRQUFRLENBQUNFLEtBQUssQ0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNDLEtBQUssQ0FBQ1gsY0FBQSxHQUFBSyxDQUFBLE1BQ3hEQyxRQUFRLENBQUNNLFFBQVEsQ0FBR0gsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUNDLEtBQUssQ0FBQ1gsY0FBQSxHQUFBSyxDQUFBLE1BRTlELEdBQUksQ0FBQUwsY0FBQSxHQUFBYSxDQUFBLFNBQUFQLFFBQVEsQ0FBQ0UsS0FBSyxFQUFJLEVBQUUsSUFBQVIsY0FBQSxHQUFBYSxDQUFBLFNBQUlQLFFBQVEsQ0FBQ00sUUFBUSxFQUFJLEVBQUUsRUFBRSxDQUFBWixjQUFBLEdBQUFhLENBQUEsU0FBQWIsY0FBQSxHQUFBSyxDQUFBLE1BQ25ESSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQ0ksU0FBUyxDQUFHLDBCQUEwQixDQUFDZCxjQUFBLEdBQUFLLENBQUEsTUFDeEUsT0FDRixDQUFDLEtBQUFMLGNBQUEsR0FBQWEsQ0FBQSxVQUNELEdBQUksQ0FBQUUsT0FBTyxFQUFBZixjQUFBLEdBQUFLLENBQUEsTUFBRyxHQUFJLENBQUFXLGNBQWMsQ0FBQyxDQUFDLEVBQUNoQixjQUFBLEdBQUFLLENBQUEsTUFFbkNVLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUUsSUFBSSxDQUFDLENBQUNqQixjQUFBLEdBQUFLLENBQUEsTUFDckNVLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsY0FBYyxDQUFFLGtCQUFrQixDQUFDLENBQUNsQixjQUFBLEdBQUFLLENBQUEsT0FDN0RVLE9BQU8sQ0FBQ0ksTUFBTSxDQUFHLFVBQVksQ0FBQW5CLGNBQUEsR0FBQUcsQ0FBQSxNQUFBSCxjQUFBLEdBQUFLLENBQUEsT0FDM0JELFFBQVEsQ0FBR2dCLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixPQUFPLENBQUNPLFlBQVksQ0FBQyxDQUFDdEIsY0FBQSxHQUFBSyxDQUFBLE9BQzVDa0IsT0FBTyxDQUFDQyxHQUFHLENBQUNwQixRQUFRLENBQUMsQ0FBQ0osY0FBQSxHQUFBSyxDQUFBLE9BQ3RCLEdBQUlELFFBQVEsQ0FBQ3FCLE9BQU8sRUFBSSxtQkFBbUIsQ0FBRSxDQUFBekIsY0FBQSxHQUFBYSxDQUFBLFNBQUFiLGNBQUEsR0FBQUssQ0FBQSxPQUMzQ3FCLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBRXJCLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDLENBQUNSLGNBQUEsR0FBQUssQ0FBQSxPQUNoRHVCLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUcsV0FBVyxDQUNwQyxDQUFDLElBQU0sQ0FBQTlCLGNBQUEsR0FBQWEsQ0FBQSxTQUFBYixjQUFBLEdBQUFLLENBQUEsT0FDTEksUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNJLFNBQVMsQ0FBRyxzQkFBc0IsQ0FDckUsQ0FDRixDQUFDLENBQUNkLGNBQUEsR0FBQUssQ0FBQSxPQUVGVSxPQUFPLENBQUNnQixJQUFJLENBQUNYLElBQUksQ0FBQ1ksU0FBUyxDQUFDMUIsUUFBUSxDQUFDLENBQUMsQ0FDeEMifQ==