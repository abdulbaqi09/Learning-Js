        //USING POP()
        let fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.pop();
        console.log(fruits);

        //USING  PUSH()
        let names = ["Ola", "Femi", "Ayo"];
        names.push("Olu");
        console.log(names);

        //USING SHIFT()
        let phone = ["Itel", "Iphone", "Nokia"];
        phone.shift();
        console.log(phone);

        //USNG UNSHIFT()
        let handset = ["Itel", "Iphone", "Nokia"];
        handset.unshift("Infinix");
        console.log(handset);

        //USING LENGHT
        let handsets = ["Itel", "Iphone", "Nokia"];
        function myFunction() {
        handset[handsets.length] = "Infinix";
        console.log(handsets);
        }

        //USING SPLICE
        let laptop =["Lenovo", "ASUS", "Dell",];
        laptop.splice(0,0, "Techno");
        console.log(laptop);

        //USING CONCAT
        let apps = ["Facebook", "Whatsapp", "Instagram", "Snapchat"];
        let myApps = laptop.concat(apps);
        console.log(myApps);

        //USING SLICE
        let app = ["Facebook", "Whatsapp", "Instagram", "Snapchat"];
        let myApp = app.slice(1,4);
        console.log(myApp);

        //USING SORT
        let pacify =["Facebook", "Whatsapp", "Instagram", "Snapchat"];
        pacify.sort();
        console.log(pacify);

        //USING REVERSE
        let pacifys =["Facebook", "Whatsapp", "Instagram", "Snapchat"];
        pacifys.sort();
        pacifys.reverse();
        console.log(pacifys);

        //USING OBJECT IN ARRAY
        

        //FOR EACH IN ARRAY
        let txt = "";
        let numbers = [45, 4, 9, 16, 25];
        numbers.forEach(myFunction);
        // document.getElementById("demo").innerHTML = txt;
        console.log(numbers);
        function myFunction(value, index, array) {
        txt = txt + value + "<br>"; 
        }
        
            
        const arr = [
        'Asabeneh',
        250,
        true,
        { country: 'Finland', city: 'Helsinki' },
        { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
        ] // arr containing different data types
        console.log(arr)

        const eightEmptyValues = Array(8) // it creates eight empty values
        console.log(eightEmptyValues)

        const eightXvalues = Array(8).fill('50') // it creates eight element values filled with 'X'
        console.log(eightXvalues) 

        const fruiats = ['banana', 'orange', 'mango', 'lemon']
        let index = fruiats.indexOf('banana')  // 0

        if(index != -1){
        console.log('This fruit is present in the array')  
        } else {
            console.log('This fruit does not exist in the array')
        }

        const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
        ] // List of web technologies

        console.log(webTechs.includes('Node'))  // true
        console.log(webTechs.includes('CSS'))     // false


        const nmes = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

        console.log(nmes.join()) 
        console.log(nmes.join(''))
        console.log(nmes.join(' ')) 
        console.log(nmes.join( '*' )) 
        console.log(nmes.join(' # ')) 


        let frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
        let backEnd = ['Node','Express', 'MongoDB']
        let fullStack = [frontEnd + backEnd]
        console.log(fullStack)   
        console.log(fullStack.length) 
        console.log(fullStack[0])  
        console.log(fullStack[1])

        // for(initialization, condition, increment/decrement){
        // code goes here
        // }
        

        
        for(let i = 0; i <= 5; i++){
        console.log(i)
        }

        // 0 1 2 3 4 5
        

       
        for(let i = 5; i >= 0; i--){
        console.log(i)
        }

        // 5 4 3 2 1 0
        

        
        for(let i = 0; i <= 12345678; i++){
        console.log(`${i} * ${i} = ${i * i}`)
        }

        
