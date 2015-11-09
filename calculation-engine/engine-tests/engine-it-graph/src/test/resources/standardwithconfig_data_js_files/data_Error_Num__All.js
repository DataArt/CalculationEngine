var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3a8acd02-dad0-492e-9e07-b5a2b559a10b', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 3a8acd02-dad0-492e-9e07-b5a2b559a10b<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1d09fb8e'},
{id: '8bc39059-a928-4473-940e-7cd29d17c14c', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: #NUM!<br>Type: FUNCTION<br>Id: 8bc39059-a928-4473-940e-7cd29d17c14c<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1d09fb8e'},
{id: '0e56fb2f-28c6-491e-9fda-e0080ef62d54', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: 0e56fb2f-28c6-491e-9fda-e0080ef62d54<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: 8.0, 6.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1d09fb8e'},
{id: '25d0b235-081e-40a3-989f-3553bf889d2b', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 25d0b235-081e-40a3-989f-3553bf889d2b<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1d09fb8e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8bc39059-a928-4473-940e-7cd29d17c14c', to: '0e56fb2f-28c6-491e-9fda-e0080ef62d54'},
{from: '25d0b235-081e-40a3-989f-3553bf889d2b', to: '8bc39059-a928-4473-940e-7cd29d17c14c'},
{from: '3a8acd02-dad0-492e-9e07-b5a2b559a10b', to: '8bc39059-a928-4473-940e-7cd29d17c14c'}
                            ]);