var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2ed192a9-f54c-4315-b3e4-de04d6bcf093', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 2ed192a9-f54c-4315-b3e4-de04d6bcf093<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: 1.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@442e7215'},
{id: 'ff7ed311-88f0-45f8-82c1-774da468cf23', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: ff7ed311-88f0-45f8-82c1-774da468cf23<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@442e7215'},
{id: '5fc50658-f5fd-44d9-89a8-ca6486052e73', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 5fc50658-f5fd-44d9-89a8-ca6486052e73<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: 2.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@442e7215'},
{id: '04847e5f-3532-440d-935c-70666ae38e2d', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: 04847e5f-3532-440d-935c-70666ae38e2d<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@442e7215'},
{id: '646d057c-293c-4911-acd2-e5be1bbd6431', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 4.0<br>Type: FUNCTION<br>Id: 646d057c-293c-4911-acd2-e5be1bbd6431<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@442e7215'},
{id: 'dbd97adf-8d63-422e-8df3-0054000f2087', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 2.0<br>Type: FUNCTION<br>Id: dbd97adf-8d63-422e-8df3-0054000f2087<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@442e7215'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '04847e5f-3532-440d-935c-70666ae38e2d', to: '646d057c-293c-4911-acd2-e5be1bbd6431'},
{from: '646d057c-293c-4911-acd2-e5be1bbd6431', to: '5fc50658-f5fd-44d9-89a8-ca6486052e73'},
{from: 'ff7ed311-88f0-45f8-82c1-774da468cf23', to: 'dbd97adf-8d63-422e-8df3-0054000f2087'},
{from: 'dbd97adf-8d63-422e-8df3-0054000f2087', to: '2ed192a9-f54c-4315-b3e4-de04d6bcf093'}
                            ]);