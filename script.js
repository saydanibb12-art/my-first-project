const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your monthly income: ₹", function(income) {
    rl.question("Enter loan amount: ₹", function(loan) {
        rl.question("Enter monthly EMI: ₹", function(emi) {
            rl.question("Enter credit score: ", function(score) {

                income = Number(income);
                loan = Number(loan);
                emi = Number(emi);
                score = Number(score);

                console.log("\n===== LOAN DECISION REPORT =====");

                if (income <= 0 || loan <= 0 || emi < 0 ||
                    score < 300 || score > 900) {
                    console.log("Status: INVALID APPLICATION");
                    console.log("Action: Please check your details.");
                }
                else if (score >= 750 && emi <= income * 0.40) {
                    console.log("Status: GREEN SIGNAL");
                    console.log("Category: Standard Applicant");
                    console.log("Message: Your details meet our initial criteria!");
                }
                else if (score >= 650 && emi <= income * 0.50) {
                    console.log("Status: NEEDS REVIEW");
                    console.log("Category: Conditional Applicant");
                    console.log("Message: Further verification is required.");
                }
                else {
                    console.log("Status: RED SIGNAL");
                    console.log("Category: High-Risk Applicant");
                    console.log("Message: Current details do not meet our criteria.");
                }

                console.log("================================");

                rl.close();
            });
        });
    });
});