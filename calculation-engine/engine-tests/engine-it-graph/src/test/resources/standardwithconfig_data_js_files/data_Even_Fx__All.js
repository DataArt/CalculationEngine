var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c515611b-dd3f-4b5d-a130-0cda3d333af2', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: c515611b-dd3f-4b5d-a130-0cda3d333af2<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: 1.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@442e7215'},
{id: '4cdb92e1-672c-4c24-b003-daca07963d21', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: 4cdb92e1-672c-4c24-b003-daca07963d21<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@442e7215'},
{id: '6eb2beba-38fb-4a8f-9223-99bbe66a336c', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 6eb2beba-38fb-4a8f-9223-99bbe66a336c<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: 2.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@442e7215'},
{id: 'db7ef918-45ec-45bc-8f00-64ac4d44eb44', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: db7ef918-45ec-45bc-8f00-64ac4d44eb44<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@442e7215'},
{id: 'f59dedb1-888c-40ed-9fc8-0f5c088a111f', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 4.0<br>Type: FUNCTION<br>Id: f59dedb1-888c-40ed-9fc8-0f5c088a111f<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@442e7215'},
{id: 'fadf79a3-f4eb-48c1-8805-c5781ba77148', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 2.0<br>Type: FUNCTION<br>Id: fadf79a3-f4eb-48c1-8805-c5781ba77148<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@442e7215'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'db7ef918-45ec-45bc-8f00-64ac4d44eb44', to: 'f59dedb1-888c-40ed-9fc8-0f5c088a111f'},
{from: 'f59dedb1-888c-40ed-9fc8-0f5c088a111f', to: '6eb2beba-38fb-4a8f-9223-99bbe66a336c'},
{from: '4cdb92e1-672c-4c24-b003-daca07963d21', to: 'fadf79a3-f4eb-48c1-8805-c5781ba77148'},
{from: 'fadf79a3-f4eb-48c1-8805-c5781ba77148', to: 'c515611b-dd3f-4b5d-a130-0cda3d333af2'}
                            ]);