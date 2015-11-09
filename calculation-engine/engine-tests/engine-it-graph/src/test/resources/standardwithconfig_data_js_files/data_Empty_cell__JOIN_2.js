var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b0bfcd99-9755-4937-b334-a392c03695b3', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: b0bfcd99-9755-4937-b334-a392c03695b3<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: 5.0, 7.0, 57.0, 46.0 SUM ; Ptgs: E1:E4 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69ed5ea2'},
{id: '7958968e-287b-4089-8a74-606b9ae0fd73', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 7958968e-287b-4089-8a74-606b9ae0fd73<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69ed5ea2'},
{id: '0c98249b-e1ba-4039-be4d-86132cbe0b9e', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: 0c98249b-e1ba-4039-be4d-86132cbe0b9e<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69ed5ea2'},
{id: '28080a78-eedd-498f-8c84-f00d7ae18fd7', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 115.0<br>Type: FUNCTION<br>Id: 28080a78-eedd-498f-8c84-f00d7ae18fd7<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69ed5ea2'},
{id: '68eda06d-a744-4469-98b5-29be280fe5bf', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 68eda06d-a744-4469-98b5-29be280fe5bf<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@69ed5ea2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0c98249b-e1ba-4039-be4d-86132cbe0b9e', to: '28080a78-eedd-498f-8c84-f00d7ae18fd7'},
{from: '68eda06d-a744-4469-98b5-29be280fe5bf', to: '7958968e-287b-4089-8a74-606b9ae0fd73'},
{from: '28080a78-eedd-498f-8c84-f00d7ae18fd7', to: 'b0bfcd99-9755-4937-b334-a392c03695b3'}
                            ]);