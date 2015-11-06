var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1544a529-2ad1-4954-b333-72dcd6a2fed0', label: 'A5\n5.0', color: '#31b0d5', title: 'Name: A5<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1544a529-2ad1-4954-b333-72dcd6a2fed0<br>Formula Expression: Formula String: A5; Formula Values: null; Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73d3e555'},
{id: 'aeba8edb-122d-4dcd-bd28-a943d368bc28', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: aeba8edb-122d-4dcd-bd28-a943d368bc28<br>Formula Expression: Formula String: ISNA(C5); Formula Values: ISNA(5.0); Formula Ptg: 5.0 ISNA ; Ptgs: C5 ISNA  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73d3e555'},
{id: 'cdfc3a41-d1b4-4ca1-9113-0bdd56131805', label: 'C5\n5.0', color: '#31b0d5', title: 'Name: C5<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: cdfc3a41-d1b4-4ca1-9113-0bdd56131805<br>Formula Expression: Formula String: C5; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73d3e555'},
{id: '0ce4fe46-6831-4842-a340-81efdfbcb611', label: 'ISNA\nFALSE', color: '#f0ad4e', title: 'Name: ISNA<br>Value: FALSE<br>Type: FUNCTION<br>Id: 0ce4fe46-6831-4842-a340-81efdfbcb611<br>Formula Expression: Formula String: ISNA(C5); Formula Values: ISNA(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@73d3e555'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0ce4fe46-6831-4842-a340-81efdfbcb611', to: 'aeba8edb-122d-4dcd-bd28-a943d368bc28'},
{from: '1544a529-2ad1-4954-b333-72dcd6a2fed0', to: 'cdfc3a41-d1b4-4ca1-9113-0bdd56131805'},
{from: 'cdfc3a41-d1b4-4ca1-9113-0bdd56131805', to: '0ce4fe46-6831-4842-a340-81efdfbcb611'}
                            ]);