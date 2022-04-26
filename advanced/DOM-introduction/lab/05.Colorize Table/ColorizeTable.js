function colorize() {

    let rows = document.querySelectorAll('table tr')

    for (let i = 1; i < rows.length; i++) {
        let row = rows[i]
        if (i % 2 != 0) {
            row.style.background = 'teal'
        }
        
    }

}