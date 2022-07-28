/**
 * In the below function we have 5 errors and 4 memory leak.
 * Find it, add a comment above the issue you found and a version of code that resolve the issue
 */

// async keyword has to be used with await.
async function getRecords() {

    // using try catch for error handling
    try {

        // using const instead of global variable
        const records = await DataBase.query("SELECT * FROM myTable");

        // define record variable
        let record;
        for (record in records) {
            console.log(record)

            // using return 
            return record
        }

        var otherRecords = DataBase.query("SELECT * FROM myTable2");

        let allRecords = [...records, otherRecords];

        console.log("Records found: " + allRecords.toString())
    } catch (error) {
        console.log(error)
    }
}

getRecords();
