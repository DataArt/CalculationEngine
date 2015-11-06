var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '07f48910-96e5-4f21-a26b-d70f9b0cdeb7', label: 'D8\n#N/A', color: '#31b0d5', title: 'Name: D8<br>Value: #N/A<br>Type: CELL_WITH_FORMULA<br>Id: 07f48910-96e5-4f21-a26b-d70f9b0cdeb7<br>Formula Expression: Formula String: ISNA(D6); Formula Values: ISNA(#N/A); Formula Ptg: #N/A ISNA ; Ptgs: D6 ISNA  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8deb645'},
{id: 'de348ced-1b4d-4f55-8267-1fed15cd48e9', label: 'D6\n#N/A', color: '#31b0d5', title: 'Name: D6<br>Value: #N/A<br>Type: CELL_WITH_VALUE<br>Id: de348ced-1b4d-4f55-8267-1fed15cd48e9<br>Formula Expression: Formula String: D6; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8deb645'},
{id: '1fd55196-5d07-4952-870f-06935511a59b', label: 'ISNA\n#N/A', color: '#f0ad4e', title: 'Name: ISNA<br>Value: #N/A<br>Type: FUNCTION<br>Id: 1fd55196-5d07-4952-870f-06935511a59b<br>Formula Expression: Formula String: ISNA(D6); Formula Values: ISNA(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@8deb645'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1fd55196-5d07-4952-870f-06935511a59b', to: '07f48910-96e5-4f21-a26b-d70f9b0cdeb7'},
{from: 'de348ced-1b4d-4f55-8267-1fed15cd48e9', to: '1fd55196-5d07-4952-870f-06935511a59b'}
                            ]);