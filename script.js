document.getElementById("bmiform").addEventListener("submit", function(e){
    e.preventDefault();
    const gender= document.getElementById("gender").value
    const age =parseInt( document.getElementById("age").value)
    const height = parseInt(document.getElementById("height").value)
    const weight = parseFloat(document.getElementById("weight").value)
    if (gender && age && height && weight){
        let bmi = weight / (height/100)**2
        const result =parseInt( document.getElementById("result"))
        if (gender === "male") {
            bmi += 5
        } else {
            bmi -= 161
        }
        bmi = Math.round(bmi)
        result.textContent = `Your BMI is ${bmi}`
        if (bmi < 18.5) {
            result.textContent += ". You are underweight."
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.textContent += ". You are normal weight."
        } else if (bmi >= 25 && bmi <= 29.9) {
            result.textContent += ". You are overweight."
        } else {
            result.textContent += ". You are obese."
        }


        
    }
})