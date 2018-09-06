module.exports = (() => {

    return [
        {
            match: (data) => {

                let pattern = /ANSI.*?DLDAA(.*?),(.*?)$/;
                let props = {},
                    results = data.match(pattern);
                if (results) {
                    if (results.length > 1) {
                        // lastname
                        props.lastName = results[1].replace(',', '');
                    }// if

                    if (results.length > 2) {
                        // firstname
                        props.firstName = results[2].replace(',', '');
                    }// if
                }// if

                return props;
            }

        }

    ];

})();