
const cardTypeFinder = (item) => {
    // this switch case gives true css variable
    switch (item.val.value) {
            case "1":
                return "--as"
            case "2":
                return "--two"
            case "3":
                return "--three"
            case "4":
                return "--four"
            case "5":
                return "--five"
            case "6":
                return "--six"
            case "7":
                return "--seven"
            case "8":
                return "--eight"
            case "9":
                return "--nine"
            case "10":
                return "--ten"
            case "11":
                return "--jack"
            case "12":
                return "--queen"
            case "13":
                return "--king"
            default:
                return ""
        }
}

export default cardTypeFinder