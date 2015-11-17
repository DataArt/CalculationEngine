var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e375ef3d-9721-46c4-ac3a-adc7c7e3b72f', label: 'ACOSH\n5.192925985263684', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: e375ef3d-9721-46c4-ac3a-adc7c7e3b72f<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fd3c38b'},
{id: '4f365a8f-4498-4900-9081-72242c75c279', label: 'ACOSH\n2.993222846126381', color: '#f0ad4e', title: 'Name: ACOSH<br>Value: 2.993222846126381<br>Type: FUNCTION<br>Id: 4f365a8f-4498-4900-9081-72242c75c279<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fd3c38b'},
{id: '9a7cb827-e74b-471b-a31f-99f5380ec594', label: 'A1\n2.993222846126381', color: '#31b0d5', title: 'Name: A1<br>Value: 2.993222846126381<br>Type: CELL_WITH_FORMULA<br>Id: 9a7cb827-e74b-471b-a31f-99f5380ec594<br>Formula Expression: Formula String: ACOSH(VALUE); Formula Values: ACOSH(10.0); Formula Ptg: 10.0 ACOSH ; Ptgs: VALUE ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fd3c38b'},
{id: 'a0ce5113-55c8-452e-9504-f872193e72fe', label: 'E5\n5.192925985263684', color: '#31b0d5', title: 'Name: E5<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: a0ce5113-55c8-452e-9504-f872193e72fe<br>Formula Expression: Formula String: ACOSH(C2); Formula Values: ACOSH(90.0); Formula Ptg: 90.0 ACOSH ; Ptgs: C2 ACOSH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fd3c38b'},
{id: '322b1d05-a666-4382-9ab2-136e58aca666', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 322b1d05-a666-4382-9ab2-136e58aca666<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fd3c38b'},
{id: '26becf90-563b-4ad0-989f-f6bc4848c143', label: 'VALUE\n10.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 10.0<br>Type: CONSTANT_VALUE<br>Id: 26becf90-563b-4ad0-989f-f6bc4848c143<br>Formula Expression: Formula String: VALUE; Formula Values: 10.0; Formula Ptg: 10.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7fd3c38b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e375ef3d-9721-46c4-ac3a-adc7c7e3b72f', to: 'a0ce5113-55c8-452e-9504-f872193e72fe'},
{from: '4f365a8f-4498-4900-9081-72242c75c279', to: '9a7cb827-e74b-471b-a31f-99f5380ec594'},
{from: '26becf90-563b-4ad0-989f-f6bc4848c143', to: '4f365a8f-4498-4900-9081-72242c75c279'},
{from: '322b1d05-a666-4382-9ab2-136e58aca666', to: 'e375ef3d-9721-46c4-ac3a-adc7c7e3b72f'}
                            ]);