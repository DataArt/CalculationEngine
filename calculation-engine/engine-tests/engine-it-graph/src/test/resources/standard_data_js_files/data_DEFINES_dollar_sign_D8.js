var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4f32e423-2c70-4f2b-96c5-b0e3784740d7', label: 'A3\n$1001', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: $1001<br>Type: CELL_WITH_VALUE<br>Id: 4f32e423-2c70-4f2b-96c5-b0e3784740d7<br>Formula Expression: Formula String: A3; Formula Values: $1001; Formula Ptg: $1001; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@37052337'},
{id: 'deeb0857-cd73-4be7-af06-ad7d18754da7', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: deeb0857-cd73-4be7-af06-ad7d18754da7<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@37052337'},
{id: '10159ee4-3d4f-49eb-82a8-b110c4ff06df', label: 'D8\n$1801', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: $1801<br>Type: CELL_WITH_FORMULA<br>Id: 10159ee4-3d4f-49eb-82a8-b110c4ff06df<br>Formula Expression: Formula String: FUNCEXEC(B3, A3, VALUE); Formula Values: FUNCEXEC($1501, $1001, DEVDEF_2); Formula Ptg: $1501, $1001, DEVDEF_2 FUNCEXEC ; Ptgs: B3, A3, VALUE FUNCEXEC  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@37052337'},
{id: '80704997-59d5-45e3-85a9-1bbc97dada67', label: 'B3\n$1501', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: $1501<br>Type: CELL_WITH_VALUE<br>Id: 80704997-59d5-45e3-85a9-1bbc97dada67<br>Formula Expression: Formula String: B3; Formula Values: $1501; Formula Ptg: $1501; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@37052337'},
{id: 'fdbb398b-9684-41aa-9f30-b207bd45a6d9', label: 'FUNCEXEC\n$1801', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: $1801<br>Type: FUNCTION<br>Id: fdbb398b-9684-41aa-9f30-b207bd45a6d9<br>Formula Expression: Formula String: FUNCEXEC(B3, A3, VALUE); Formula Values: FUNCEXEC($1501, $1001, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@37052337'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '80704997-59d5-45e3-85a9-1bbc97dada67', to: 'fdbb398b-9684-41aa-9f30-b207bd45a6d9'},
{from: 'deeb0857-cd73-4be7-af06-ad7d18754da7', to: 'fdbb398b-9684-41aa-9f30-b207bd45a6d9'},
{from: '4f32e423-2c70-4f2b-96c5-b0e3784740d7', to: 'fdbb398b-9684-41aa-9f30-b207bd45a6d9'},
{from: 'fdbb398b-9684-41aa-9f30-b207bd45a6d9', to: '10159ee4-3d4f-49eb-82a8-b110c4ff06df'}
                            ]);