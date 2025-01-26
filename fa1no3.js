function infoFunction() {
    if (confirm("OK or Cancel")) {
        console.log("Name: " + nn);
        console.log("Height: " + fht + "'" + iht + '"');
        console.log("Weight: " + pwt +" lbs");
    } else {
        console.log("User does not wish to share his/her information");
    }
}