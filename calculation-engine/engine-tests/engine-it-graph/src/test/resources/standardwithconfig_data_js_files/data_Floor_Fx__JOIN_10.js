var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ac91e5b7-9a21-4a0e-93c3-dadd8587366b', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: ac91e5b7-9a21-4a0e-93c3-dadd8587366b<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: 2.0, 3.7 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: '0b363565-bdfc-4354-92aa-fdf57fcbc5ed', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 0b363565-bdfc-4354-92aa-fdf57fcbc5ed<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: 'f93d10cc-7279-4bae-a51e-0e7999dcfeb6', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: f93d10cc-7279-4bae-a51e-0e7999dcfeb6<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: 3.0, 32.5678 FLOOR ; Ptgs: VALUE, VALUE FLOOR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: '1c59347e-267b-4797-9233-842c41adf2f4', label: 'VALUE\n3.7', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.7<br>Type: CONSTANT_VALUE<br>Id: 1c59347e-267b-4797-9233-842c41adf2f4<br>Formula Expression: Formula String: VALUE; Formula Values: 3.7; Formula Ptg: 3.7; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: 'f8985832-cda4-4bb5-93f3-b9f43e560b19', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: f8985832-cda4-4bb5-93f3-b9f43e560b19<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: '0a363285-0b69-4244-8e41-dbb73fda0f87', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: 0a363285-0b69-4244-8e41-dbb73fda0f87<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: '00dbbd48-a3d9-42a0-8285-6a056f9b5d6d', label: 'FLOOR\n2.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 2.0<br>Type: FUNCTION<br>Id: 00dbbd48-a3d9-42a0-8285-6a056f9b5d6d<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'},
{id: 'eb971bec-312f-4552-a353-7d3666e84422', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Value: 30.0<br>Type: FUNCTION<br>Id: eb971bec-312f-4552-a353-7d3666e84422<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a666c8e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0a363285-0b69-4244-8e41-dbb73fda0f87', to: 'eb971bec-312f-4552-a353-7d3666e84422'},
{from: '1c59347e-267b-4797-9233-842c41adf2f4', to: '00dbbd48-a3d9-42a0-8285-6a056f9b5d6d'},
{from: 'f8985832-cda4-4bb5-93f3-b9f43e560b19', to: 'eb971bec-312f-4552-a353-7d3666e84422'},
{from: 'eb971bec-312f-4552-a353-7d3666e84422', to: 'f93d10cc-7279-4bae-a51e-0e7999dcfeb6'},
{from: '0b363565-bdfc-4354-92aa-fdf57fcbc5ed', to: '00dbbd48-a3d9-42a0-8285-6a056f9b5d6d'},
{from: '00dbbd48-a3d9-42a0-8285-6a056f9b5d6d', to: 'ac91e5b7-9a21-4a0e-93c3-dadd8587366b'}
                            ]);