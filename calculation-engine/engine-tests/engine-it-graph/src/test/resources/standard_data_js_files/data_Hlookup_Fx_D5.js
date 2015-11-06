var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7aecd0b1-293b-42f1-bc1e-adc46676e79a', label: 'VALUE\nAlt', color: '#31b0d5', title: 'Name: VALUE<br>Value: Alt<br>Type: CONSTANT_VALUE<br>Id: 7aecd0b1-293b-42f1-bc1e-adc46676e79a<br>Formula Expression: Formula String: VALUE; Formula Values: Alt; Formula Ptg: Alt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67001148'},
{id: '8babb0c3-e7e5-4d11-929e-f424f0354111', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 8babb0c3-e7e5-4d11-929e-f424f0354111<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67001148'},
{id: 'c34003bc-5d35-4d48-abf9-d2f5aa99ae81', label: 'D5\n4.0', color: '#31b0d5', title: 'Name: D5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: c34003bc-5d35-4d48-abf9-d2f5aa99ae81<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt HLOOKUP ; Ptgs: VALUE, VALUE, A1:C4, VALUE HLOOKUP  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67001148'},
{id: '040c8089-bd21-4c18-bafc-fb5832284a37', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]<br>Type: RANGE<br>Id: 040c8089-bd21-4c18-bafc-fb5832284a37<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Formula Ptg: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Ptgs: A1:C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67001148'},
{id: 'eadfc4e2-3953-4a17-9dcf-346c39a88e42', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: eadfc4e2-3953-4a17-9dcf-346c39a88e42<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67001148'},
{id: '13678a07-6450-4e85-94ea-711c3df138ec', label: 'HLOOKUP\n4.0', color: '#f0ad4e', title: 'Name: HLOOKUP<br>Value: 4.0<br>Type: FUNCTION<br>Id: 13678a07-6450-4e85-94ea-711c3df138ec<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67001148'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7aecd0b1-293b-42f1-bc1e-adc46676e79a', to: '13678a07-6450-4e85-94ea-711c3df138ec'},
{from: '040c8089-bd21-4c18-bafc-fb5832284a37', to: '13678a07-6450-4e85-94ea-711c3df138ec'},
{from: '8babb0c3-e7e5-4d11-929e-f424f0354111', to: '13678a07-6450-4e85-94ea-711c3df138ec'},
{from: 'eadfc4e2-3953-4a17-9dcf-346c39a88e42', to: '13678a07-6450-4e85-94ea-711c3df138ec'},
{from: '13678a07-6450-4e85-94ea-711c3df138ec', to: 'c34003bc-5d35-4d48-abf9-d2f5aa99ae81'}
                            ]);