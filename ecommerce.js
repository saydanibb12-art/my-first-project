// Phase 1: Initialize variables
let customerId = "E101";
let orderAmount = 6000;
let customerCategory = "Premium";
let deliveryLocation = "City";

// Phase 2: Initialize discount and delivery variables
let discountRate = 0;
let extraDiscount = 0;
let discountAmount = 0;
let deliveryCharge = 0;
let finalPayableAmount = 0;
let orderSummary = "";

// Phase 3: Calculate membership discount
if (customerCategory === "Premium") {
    discountRate = 0.15;
} else if (customerCategory === "Regular") {
    discountRate = 0.05;
} else {
    console.log("Invalid customer category");
}

// Phase 4: Calculate total discount
discountAmount = orderAmount * discountRate;

if (orderAmount > 5000) {
    extraDiscount = 500;
}

discountAmount = discountAmount + extraDiscount;

// Maximum discount is 20% of original amount
if (discountAmount > orderAmount * 0.20) {
    discountAmount = orderAmount * 0.20;
}

// Phase 5: Calculate delivery charges
if (orderAmount >= 3000) {
    deliveryCharge = 0;
} else if (deliveryLocation === "Local") {
    deliveryCharge = 50;
} else if (deliveryLocation === "City") {
    deliveryCharge = 100;
} else if (deliveryLocation === "Remote") {
    deliveryCharge = 150;
} else {
    deliveryCharge = 0;
}

// Phase 6: Calculate final payable amount
finalPayableAmount = orderAmount - discountAmount + deliveryCharge;

// Phase 7: Generate order summary
if (orderAmount <= 0 ||
    (customerCategory !== "Premium" &&
     customerCategory !== "Regular")) {
    orderSummary = "Invalid order details";
} else {
    orderSummary = "Order calculated successfully";
}

// Phase 8: Display output
console.log("===== E-COMMERCE ORDER SUMMARY =====");
console.log("Customer ID:", customerId);
console.log("Customer Category:", customerCategory);
console.log("Original Order Amount: Rs.", orderAmount);
console.log("Discount Amount: Rs.", discountAmount);
console.log("Delivery Location:", deliveryLocation);
console.log("Delivery Charge: Rs.", deliveryCharge);
console.log("Final Payable Amount: Rs.", finalPayableAmount);
console.log("Order Summary:", orderSummary);