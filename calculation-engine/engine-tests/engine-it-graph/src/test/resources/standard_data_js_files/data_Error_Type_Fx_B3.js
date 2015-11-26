var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0bbcc2b6-d406-4901-b217-2689e51a2ba0', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 0bbcc2b6-d406-4901-b217-2689e51a2ba0<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: #N/A ERROR.TYPE ; Ptgs: VALUE ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1d81e101'},
{id: '1e474cda-5821-46af-9d97-6b203c8005ba', label: 'ERROR.TYPE\n7.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Alias: null<br>Value: 7.0<br>Type: FUNCTION<br>Id: 1e474cda-5821-46af-9d97-6b203c8005ba<br>Formula Expression: Formula String: ERROR.TYPE(VALUE); Formula Values: ERROR.TYPE(#N/A); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1d81e101'},
{id: '080a9967-2760-4a01-882b-f0cfdecca94c', label: 'VALUE\n#N/A', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #N/A<br>Type: CONSTANT_VALUE<br>Id: 080a9967-2760-4a01-882b-f0cfdecca94c<br>Formula Expression: Formula String: VALUE; Formula Values: #N/A; Formula Ptg: #N/A; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1d81e101'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '080a9967-2760-4a01-882b-f0cfdecca94c', to: '1e474cda-5821-46af-9d97-6b203c8005ba'},
{from: '1e474cda-5821-46af-9d97-6b203c8005ba', to: '0bbcc2b6-d406-4901-b217-2689e51a2ba0'}
                            ]);