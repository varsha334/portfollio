const fs = require('fs');
const path = require('path');

const projects = [
    { id: 1, title: "Dalmia Grower Mobile App" },
    { id: 2, title: "AMS Asset Management System" },
    { id: 3, title: "OLAM GrainFlow Logistics" },
    { id: 4, title: "Namami Gange ecology Web" },
    { id: 5, title: "Market Place Portal" },
    { id: 6, title: "ATSP Learning Management Portal" },
    { id: 7, title: "Land Assets Management" },
    { id: 8, title: "HRMS Portal" }
];

const projectFolders = {
    1: "Dalmia Grower App",
    2: "AMS",
    3: "GrainFlow",
    4: "Namami Gange  Prrogramme",
    5: "Market Place",
    6: "ATSP",
    7: "Land Assets Management",
    8: "HRMS"
};

const projectImages = {
    1: [
        "Add_New_Indent Round Mapping.png",
        "Add_New_Indent_Capture coordinates.png",
        "Add_New_Indent_Manual Area.png",
        "Add_New_Planting_Capture coordinate.png",
        "Add_New_Planting_round mapping.png",
        "Agri Services_Cane Planting.png",
        "Agri Services_Indent.png",
        "Cane Planting_Successfully.png",
        "choose language.png",
        "Family_management-1.png",
        "Family_management.png",
        "Indent_Plot-1.png",
        "Indent_Plot.png",
        "Indent_Plot_Edit.png",
        "Landing_Page-1.png",
        "Landing_Page.png",
        "Login-1.png",
        "Login.png",
        "Notification.png",
        "Plot for planting_Detail.png",
        "Plot_Detail.png",
        "Side_bar.png",
        "Signup.png",
        "Signup_OTP.png",
        "Signup_Successfully.png",
        "Splash Screen.png"
    ],
    2: [
        "Dashboard-1.png",
        "Dashboard.png",
        "Html → Body → Mobile Container.png",
        "Html → Body-1.png",
        "Html → Body-2.png",
        "Html → Body.png",
        "LMS - Forgot Password.png",
        "LMS - OTP Verification.png",
        "LMS - Reset OTP Verification.png",
        "LMS - Set New Password.png",
        "Login_.png",
        "Main.png",
        "QR_scan.png",
        "side_bar.png",
        "Side_menu.png"
    ],
    3: [
        "01.png",
        "Allocate details-1.png",
        "Allocate details.png",
        "choose language.png",
        "Depth 0, Frame 0-1.png",
        "Depth 0, Frame 0.png",
        "Depth 0, Frame 5.png",
        "dispatch detail.png",
        "en route-1.png",
        "en route.png",
        "Get Started.png",
        "gst number.png",
        "Otp Verification 02.png",
        "Otp Verification.png",
        "PO Detail-1.png",
        "PO Detail.png",
        "Stitch Design.png"
    ],
    4: [
        "Add_STP.png",
        "Body-1.png",
        "Body-2.png",
        "Body.png",
        "Invalid_password.png",
        "Lab Module - Test Reports.png",
        "Login.png",
        "OTP Verification Screen.png",
        "Report Detail (Final SOW).png",
        "Select_role.png",
        "Side_bar.png",
        "STP.png",
        "STP_detail_view.png"
    ],
    5: [
        "3. Opening UPI App-1.png",
        "3. Opening UPI App-2.png",
        "3. Opening UPI App.png",
        "4. UPI Approval View.png",
        "5. Enter UPI PIN.png",
        "7. Payment Success ✅.png",
        "Body-1.png",
        "Body-2.png",
        "Body.png",
        "Buy Equipment Marketplace.png",
        "Equipment Rental Listings.png",
        "Filters & Sorting.png",
        "Grower Dashboard.png",
        "Grower Payment Selection.png",
        "Grower Registration Screen.png",
        "Login Screen.png",
        "Onboarding - Purchase Focus.png",
        "Onboarding - Rental Focus.png",
        "Onboarding - Welcome Screen.png",
        "Order & Booking Tracking.png",
        "Order History Screen.png",
        "OTP Verification Screen.png",
        "User Profile.png"
    ],
    6: [
        "AgriMarket OTP Verification-1.png",
        "AgriMarket OTP Verification-2.png",
        "AgriMarket OTP Verification.png",
        "Body-1.png",
        "Body-2.png",
        "Body-3.png",
        "Body-4.png",
        "Body-5.png",
        "Body.png",
        "Farmer_Registration.png",
        "iPhone 17 - 1.png",
        "Onboarding - Rental Focus.png",
        "OVERLAY_ Modal Dark Backdrop.png",
        "Product Details - Mahindra Gyrovator ZLX+.png",
        "Search & Filter Results.png"
    ],
    7: [
        "Add New Land Form.png",
        "Add_new_case.png",
        "add_user.png",
        "Admin_dashboard-1.png",
        "Admin_dashboard-2.png",
        "Admin_dashboard.png",
        "Audit Logs - Exact Replica.png",
        "Body.png",
        "Docment_upload.png",
        "Document.png",
        "Land_Assests.png",
        "Lease_Management.png",
        "Litigation.png",
        "LMS - Forgot Password.png",
        "LMS - OTP Verification.png",
        "LMS - Reset OTP Verification.png",
        "LMS - Set New Password.png",
        "Login_.png",
        "Map.png",
        "Notification-1.png",
        "Notification.png",
        "Profile.png",
        "Role_Management.png",
        "Side_bar.png",
        "Upload Document - Step 3 (Corrected).png",
        "User_managament.png"
    ],
    8: [
        "Home-1.png",
        "Home-2.png",
        "Home.png",
        "OnboardFinal-1.png",
        "OnboardFinal.png",
        "SignIn-1.png",
        "SignIn-2.png",
        "SignIn-3.png",
        "SignIn.png",
        "TaskMenu.png",
        "Leave/Approved.png",
        "Leave/Rejected.png",
        "Leave/Review-1.png",
        "Leave/Review.png",
        "Task/In Progress-1.png",
        "Task/In Progress.png",
        "TaskMenu/CreateTask-1.png",
        "TaskMenu/CreateTask.png"
    ]
};

const BASE_DIR = path.resolve(__dirname, '..');

let missingCount = 0;
let totalCount = 0;

for (let id = 1; id <= 8; id++) {
    const folder = projectFolders[id];
    const images = projectImages[id];
    if (!images) continue;
    
    images.forEach(filename => {
        totalCount++;
        // Construct filesystem path
        const fileSubpath = path.join('images', folder, filename);
        const fullPath = path.join(BASE_DIR, fileSubpath);
        
        if (!fs.existsSync(fullPath)) {
            console.log(`[MISSING] Project ${id} (${projects.find(p => p.id === id).title}): ${fileSubpath}`);
            missingCount++;
        }
    });
}

console.log(`\nCheck completed. Total images checked: ${totalCount}, Missing: ${missingCount}`);
