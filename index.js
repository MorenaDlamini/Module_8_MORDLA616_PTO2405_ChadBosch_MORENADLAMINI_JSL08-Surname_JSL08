// Step 1: Create a variable to store the singleton instance of the bank branch.
let bankBranchInstance = null;

// Step 2: Define the BankBranch class
class BankBranch {
    constructor(branchInfo) {
        //Will Assign branchInfo only if an instance doesn't exist
        if (!bankBranchInstance) {
            this.branchInfo = branchInfo;
            bankBranchInstance = this;
        }
        // Always return the existing instance
        return bankBranchInstance;
    }

    // Step 4: Add methods to manage branch-related information
     getBranchInfo() {
        return this.branchInfo;
    }

    // Update branch information
    setBranchInfo(newBranchInfo) {
        this.branchInfo = newBranchInfo;
    }
}

// Step 5: Usage example
// Creating two instances of the BankBranch class

// Branch A information
const branchA = new BankBranch({
    name: "Main Branch",
    address: "43 Bradford Rd",
    contactDetails: "087 345 2170",
    entrance: "Lower Level Entrance 3",
    locationInMall: "L6 /L7",
    storeHours: {
        weekdays: "Mon-Fri: 9am – 5pm",
        saturday: "Sat: 9am – 1pm",
        sunday: "Sun: Closed"
    }
});
console.log(branchA.getBranchInfo());

// Branch B information (will refer to branchA due to singleton pattern)
const branchB = new BankBranch({
    name: "Secondary Branch",
    address: "34 Bedford Garden Centre, Smith Rd",
    telephoneNumber: "(011) 856-5600",
    altTelephoneNumber: "087 345 2730",
    shopNumber: "U34",
    storeHours: {
        weekdays: "Mon-Fri: 9am – 5pm",
        saturday: "Sat: 9am – 1pm",
        sunday: "Sun: Closed"
    },
    website: "https://www.fnb.co.za"
});
console.log(branchB.getBranchInfo());

// Verify that both branchA and branchB refer to the same instance
console.log(branchA === branchB); // Output: true
