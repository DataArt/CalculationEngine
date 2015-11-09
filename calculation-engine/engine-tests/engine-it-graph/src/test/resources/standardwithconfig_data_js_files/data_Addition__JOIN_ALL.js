var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7b81f1ec-2882-4aa0-954a-4cc925fc8145', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 7b81f1ec-2882-4aa0-954a-4cc925fc8145<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69453e37'},
{id: 'e78e4441-a0b3-49e8-850b-ae6a124c7dd9', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: e78e4441-a0b3-49e8-850b-ae6a124c7dd9<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69453e37'},
{id: '8aebc670-3174-4b06-8952-6b0782760f42', label: 'A3\n50.0', color: '#31b0d5', title: 'Name: A3<br>Value: 50.0<br>Type: CELL_WITH_FORMULA<br>Id: 8aebc670-3174-4b06-8952-6b0782760f42<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: 20.0 30.0 +; Ptgs: A1 A2 + Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69453e37'},
{id: 'ee6ab1e5-362b-4bcf-8131-94b67018bdbf', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: ee6ab1e5-362b-4bcf-8131-94b67018bdbf<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69453e37'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7b81f1ec-2882-4aa0-954a-4cc925fc8145', to: 'e78e4441-a0b3-49e8-850b-ae6a124c7dd9'},
{from: 'ee6ab1e5-362b-4bcf-8131-94b67018bdbf', to: 'e78e4441-a0b3-49e8-850b-ae6a124c7dd9'},
{from: 'e78e4441-a0b3-49e8-850b-ae6a124c7dd9', to: '8aebc670-3174-4b06-8952-6b0782760f42'}
                            ]);