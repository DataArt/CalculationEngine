var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd5458952-a6f0-484e-b5dc-54fa8d3af7ef', label: 'A6\n4.0', color: '#31b0d5', title: 'Name: A6<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: d5458952-a6f0-484e-b5dc-54fa8d3af7ef<br>Formula Expression: Formula String: A6; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: '9305c73e-aa6d-409e-988c-1c06c193a20e', label: 'ISBLANK\n#NAME?', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: #NAME?<br>Type: FUNCTION<br>Id: 9305c73e-aa6d-409e-988c-1c06c193a20e<br>Formula Expression: Formula String: ISBLANK(C5); Formula Values: ISBLANK(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: '640d3312-a64d-4a64-a2c4-72881a33d731', label: 'D7\n#NAME?', color: '#31b0d5', title: 'Name: D7<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: 640d3312-a64d-4a64-a2c4-72881a33d731<br>Formula Expression: Formula String: ISBLANK(C5); Formula Values: ISBLANK(#NAME?); Formula Ptg: #NAME? ISBLANK ; Ptgs: C5 ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: 'ce37b477-9dd7-4762-96a8-f3b01e788ad0', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: ce37b477-9dd7-4762-96a8-f3b01e788ad0<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: '24c5f556-04ed-4eb5-af72-ff13a6befdd1', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 24c5f556-04ed-4eb5-af72-ff13a6befdd1<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: 4.0 ISBLANK ; Ptgs: A6 ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: '504a93bb-f6d9-4bfe-9492-197281ce32fc', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: FALSE<br>Type: FUNCTION<br>Id: 504a93bb-f6d9-4bfe-9492-197281ce32fc<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#REF!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: '27a3d124-5333-4c30-a44c-687f7d61fe00', label: 'D5\nFALSE', color: '#31b0d5', title: 'Name: D5<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 27a3d124-5333-4c30-a44c-687f7d61fe00<br>Formula Expression: Formula String: ISBLANK(ISBLANK(A6)); Formula Values: ISBLANK(ISBLANK(4.0)); Formula Ptg: 4.0 ISBLANK  ISBLANK ; Ptgs: A6 ISBLANK  ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: '21e96c92-b10d-4c27-bc3a-73f48ed22b21', label: 'D3\nFALSE', color: '#31b0d5', title: 'Name: D3<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 21e96c92-b10d-4c27-bc3a-73f48ed22b21<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: 6.0 ISBLANK ; Ptgs: VALUE ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: '1f09ec3f-c0d2-4016-ae05-a197e6224659', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: FALSE<br>Type: FUNCTION<br>Id: 1f09ec3f-c0d2-4016-ae05-a197e6224659<br>Formula Expression: Formula String: ISBLANK(ISBLANK(A6)); Formula Values: ISBLANK(ISBLANK(4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: '445c48bf-24b6-4373-bda1-34e744f0f3d7', label: 'C5\n#NAME?', color: '#31b0d5', title: 'Name: C5<br>Value: #NAME?<br>Type: CELL_WITH_VALUE<br>Id: 445c48bf-24b6-4373-bda1-34e744f0f3d7<br>Formula Expression: Formula String: C5; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: 'bfac875c-2e79-4310-bd4e-84cde4f38cc2', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: bfac875c-2e79-4310-bd4e-84cde4f38cc2<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: '7e44cca5-8058-40d0-b448-9c6a67dce3b6', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: FALSE<br>Type: FUNCTION<br>Id: 7e44cca5-8058-40d0-b448-9c6a67dce3b6<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: 'c3cdf9d2-1449-4235-9a2b-bd6bdc5ac489', label: 'D6\nFALSE', color: '#31b0d5', title: 'Name: D6<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: c3cdf9d2-1449-4235-9a2b-bd6bdc5ac489<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#REF!); Formula Ptg: #REF! ISBLANK ; Ptgs: VALUE ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: '23ba9bda-99be-4672-bc5e-b7be1f2a2d34', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: FALSE<br>Type: FUNCTION<br>Id: 23ba9bda-99be-4672-bc5e-b7be1f2a2d34<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'},
{id: '604ecf0d-0bf3-4789-ba19-27397eef4fff', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 604ecf0d-0bf3-4789-ba19-27397eef4fff<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: 4.0 ISBLANK ; Ptgs: A6 ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5f6e6902'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '445c48bf-24b6-4373-bda1-34e744f0f3d7', to: '9305c73e-aa6d-409e-988c-1c06c193a20e'},
{from: '9305c73e-aa6d-409e-988c-1c06c193a20e', to: '640d3312-a64d-4a64-a2c4-72881a33d731'},
{from: '24c5f556-04ed-4eb5-af72-ff13a6befdd1', to: '1f09ec3f-c0d2-4016-ae05-a197e6224659'},
{from: '504a93bb-f6d9-4bfe-9492-197281ce32fc', to: 'c3cdf9d2-1449-4235-9a2b-bd6bdc5ac489'},
{from: '23ba9bda-99be-4672-bc5e-b7be1f2a2d34', to: '604ecf0d-0bf3-4789-ba19-27397eef4fff'},
{from: 'bfac875c-2e79-4310-bd4e-84cde4f38cc2', to: '504a93bb-f6d9-4bfe-9492-197281ce32fc'},
{from: 'ce37b477-9dd7-4762-96a8-f3b01e788ad0', to: '7e44cca5-8058-40d0-b448-9c6a67dce3b6'},
{from: '7e44cca5-8058-40d0-b448-9c6a67dce3b6', to: '21e96c92-b10d-4c27-bc3a-73f48ed22b21'},
{from: '1f09ec3f-c0d2-4016-ae05-a197e6224659', to: '27a3d124-5333-4c30-a44c-687f7d61fe00'},
{from: 'd5458952-a6f0-484e-b5dc-54fa8d3af7ef', to: '23ba9bda-99be-4672-bc5e-b7be1f2a2d34'},
{from: '23ba9bda-99be-4672-bc5e-b7be1f2a2d34', to: '24c5f556-04ed-4eb5-af72-ff13a6befdd1'}
                            ]);