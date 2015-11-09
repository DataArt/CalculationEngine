var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4bb87da4-65ff-4243-b661-41bd1776b56c', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 4bb87da4-65ff-4243-b661-41bd1776b56c<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c30f26d'},
{id: 'd44c1275-0a59-4061-a8b2-f45306d2098d', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: d44c1275-0a59-4061-a8b2-f45306d2098d<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c30f26d'},
{id: '27738148-f921-4bac-acb3-91e39dfa1394', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 27738148-f921-4bac-acb3-91e39dfa1394<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c30f26d'},
{id: '66d4b9fd-a08a-4c7a-a64b-6325f87a369a', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 66d4b9fd-a08a-4c7a-a64b-6325f87a369a<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c30f26d'},
{id: '20ce7323-c46f-4ba4-9e90-c64f640b958c', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 20ce7323-c46f-4ba4-9e90-c64f640b958c<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c30f26d'},
{id: '35e551fe-ef99-4847-b0be-3a19a66991b6', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: 35e551fe-ef99-4847-b0be-3a19a66991b6<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c30f26d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '20ce7323-c46f-4ba4-9e90-c64f640b958c', to: '66d4b9fd-a08a-4c7a-a64b-6325f87a369a'},
{from: '66d4b9fd-a08a-4c7a-a64b-6325f87a369a', to: '4bb87da4-65ff-4243-b661-41bd1776b56c'},
{from: '35e551fe-ef99-4847-b0be-3a19a66991b6', to: 'd44c1275-0a59-4061-a8b2-f45306d2098d'},
{from: '27738148-f921-4bac-acb3-91e39dfa1394', to: '35e551fe-ef99-4847-b0be-3a19a66991b6'}
                            ]);