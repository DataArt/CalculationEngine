var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '19960b0b-d007-4986-aea4-901528df850d', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 19960b0b-d007-4986-aea4-901528df850d<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: 1.0, 1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: '3cda8b65-d78a-4153-8a14-13ac9e87f498', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 3cda8b65-d78a-4153-8a14-13ac9e87f498<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: 'a80d299c-741f-41f1-9e58-d04f28c76998', label: 'ATAN2\n-2.356194490192345', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: -2.356194490192345<br>Type: FUNCTION<br>Id: a80d299c-741f-41f1-9e58-d04f28c76998<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: 'e26bc476-9b4e-44fa-a03c-a7b5a63ccde5', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: e26bc476-9b4e-44fa-a03c-a7b5a63ccde5<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: '82cfcaa3-58e1-422c-bd8b-a2038ec14f18', label: 'ATAN2\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN2<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 82cfcaa3-58e1-422c-bd8b-a2038ec14f18<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(1.0, 1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: 'e2082465-50d4-4453-acbf-6beaa308a986', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: e2082465-50d4-4453-acbf-6beaa308a986<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: '16836367-10af-4b74-9312-11995abd6231', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 16836367-10af-4b74-9312-11995abd6231<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'},
{id: '8b3492e1-cf5c-4790-a07f-eb5465f13569', label: 'B3\n-2.356194490192345', color: '#31b0d5', title: 'Name: B3<br>Value: -2.356194490192345<br>Type: CELL_WITH_FORMULA<br>Id: 8b3492e1-cf5c-4790-a07f-eb5465f13569<br>Formula Expression: Formula String: ATAN2(VALUE, VALUE); Formula Values: ATAN2(-1.0, -1.0); Formula Ptg: -1.0, -1.0 ATAN2 ; Ptgs: VALUE, VALUE ATAN2  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@78cfa264'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a80d299c-741f-41f1-9e58-d04f28c76998', to: '8b3492e1-cf5c-4790-a07f-eb5465f13569'},
{from: '3cda8b65-d78a-4153-8a14-13ac9e87f498', to: '82cfcaa3-58e1-422c-bd8b-a2038ec14f18'},
{from: 'e26bc476-9b4e-44fa-a03c-a7b5a63ccde5', to: '82cfcaa3-58e1-422c-bd8b-a2038ec14f18'},
{from: 'e2082465-50d4-4453-acbf-6beaa308a986', to: 'a80d299c-741f-41f1-9e58-d04f28c76998'},
{from: '16836367-10af-4b74-9312-11995abd6231', to: 'a80d299c-741f-41f1-9e58-d04f28c76998'},
{from: '82cfcaa3-58e1-422c-bd8b-a2038ec14f18', to: '19960b0b-d007-4986-aea4-901528df850d'}
                            ]);