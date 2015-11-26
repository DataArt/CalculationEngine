var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b3a995d6-46a8-4d87-888c-2128c812ef0d', label: 'A3\n50.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 50.0<br>Type: CELL_WITH_FORMULA<br>Id: b3a995d6-46a8-4d87-888c-2128c812ef0d<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: 20.0 30.0 +; Ptgs: A1 A2 + Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4f83df68'},
{id: '3ec0bac7-6b52-4800-aee9-095e789018ee', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 50.0<br>Type: OPERATOR<br>Id: 3ec0bac7-6b52-4800-aee9-095e789018ee<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4f83df68'},
{id: '511dce6a-081e-4656-8da3-d120d6a4ed5a', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 511dce6a-081e-4656-8da3-d120d6a4ed5a<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4f83df68'},
{id: '393069ef-6ad8-4844-99c5-f4d8982304a5', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 393069ef-6ad8-4844-99c5-f4d8982304a5<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4f83df68'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '511dce6a-081e-4656-8da3-d120d6a4ed5a', to: '3ec0bac7-6b52-4800-aee9-095e789018ee'},
{from: '3ec0bac7-6b52-4800-aee9-095e789018ee', to: 'b3a995d6-46a8-4d87-888c-2128c812ef0d'},
{from: '393069ef-6ad8-4844-99c5-f4d8982304a5', to: '3ec0bac7-6b52-4800-aee9-095e789018ee'}
                            ]);