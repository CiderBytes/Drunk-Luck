function Rule(name, description){
    this.ruleName = name;
    this.ruleDescription = description;
    this.game = "Drunk Luck";
    this.language = "English";
    this.profile = function() 
        {return "This rule is called " + this.ruleName + " - " + this.ruleDescription;};
}

let rule1 = new Rule("T-rex Arms", "You must place both arms inside of your shirt sleeves, up to the elbow and kept there.");



console.log(rule1.profile());
