var users = [
    {
        name: 'John',
        age:30,
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar.png'
    },
    {
        name: 'Lucy',
        age:22,
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png'
    },
    {
        name: 'Stella',
        age:22,
        gender: 'F',
        hobby: 'music',
        avatar: 'avatar2.png'
    },
    {
        name: 'Queen',
        age:20,
        gender: 'F',
        hobby: 'Shopping',
        avatar: 'avatar3.png'
    },
    {
        name: 'Matt',
        age:25,
        gender: 'M',
        hobby: 'Swimming',
        avatar: 'avatar4.png'
    },
    {
        name: 'James',
        age:19,
        gender: 'M',
        hobby: 'Sport',
        avatar: 'avatar5.png'
    },
    {
        name: 'Joyce',
        age:29,
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar6.png'
    },
    {
        name: 'Ivy',
        age:19,
        gender: 'F',
        hobby: 'Party',
        avatar: 'avatar7.jpg'
    },
];

window.addEventListener('load',function () {
    var searchBtn = document.getElementById('searchBtn');
    var results = document.getElementById('results');
    searchBtn.addEventListener('click',function () {
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        var genderField = document.getElementById('gender');
        var genderIndex = genderField.selectedIndex;
        var gender = genderField.options[genderIndex].value;

        var minAgeField = document.getElementById('minAge');
        var maxAgeField = document.getElementById('maxAge');
        var minAge = minAgeField.value;
        var maxAge = maxAgeField.value;

       

        if(maxAge < minAge && maxAge && minAge){
            alert("Maximum Age should be greater than minimum age.");

            console.log(minAge);
            console.log(maxAge);
        }else{
            var resultHtml = '';

            for (let i = 0; i < users.length; i++) {

                if(gender == 'A' || gender == users[i].gender){
                    if(hobby == '' || hobby == users[i].hobby){
                        if( minAge && users[i].age >= minAge && !maxAge){

                            resultHtml += `
                            <div class="person-row">
                            <img src="img/${users[i].avatar}" alt="${users[i].name}">
                            <div id="person-info">
                                <div><h3>${users[i].name}</h3></div>
                                <div>${users[i].age}</div>
                                <div>${users[i].hobby}</div>
                            </div>
                            <button>Add as friend</button>
                        </div>
                            
                            `;
                            

                        }else if(!minAge && maxAge &&   users[i].age <= maxAge){
                            resultHtml += `
                            <div class="person-row">
                            <img src="img/${users[i].avatar}" alt="${users[i].name}">
                            <div id="person-info">
                                <div><h3>${users[i].name}</h3></div>
                                <div>${users[i].age}</div>
                                <div>${users[i].hobby}</div>
                            </div>
                            <button>Add as friend</button>
                        </div>
                            
                            `;
                        
                        }else if( minAge && maxAge && users[i].age >= minAge && users[i].age <= maxAge){
                            resultHtml += `
                            <div class="person-row">
                            <img src="img/${users[i].avatar}" alt="${users[i].name}">
                            <div id="person-info">
                                <div><h3>${users[i].name}</h3></div>
                                <div>${users[i].age}</div>
                                <div>${users[i].hobby}</div>
                            </div>
                            <button>Add as friend</button>
                        </div>
                            
                            `;
                              
                        }else if(!maxAge && !minAge){
                            resultHtml += `
                            <div class="person-row">
                            <img src="img/${users[i].avatar}" alt="${users[i].name}">
                            <div id="person-info">
                                <div><h3>${users[i].name}</h3></div>
                                <div>${users[i].age}</div>
                                <div>${users[i].hobby}</div>
                            </div>
                            <button>Add as friend</button>
                        </div>
                            
                            `;
                            
                        }
                       
                    }
                }   
            
            }

            results.innerHTML = resultHtml;
        }      
     
    });
});