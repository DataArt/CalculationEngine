var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '758889da-003e-45a1-bbe9-7860b0214c33', label: 'LN\n3.0', color: '#f0ad4e', title: 'Name: LN<br>Alias: null<br>Value: 3.0<br>Type: FUNCTION<br>Id: 758889da-003e-45a1-bbe9-7860b0214c33<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: '690dd75f-a7c7-44dd-ab2a-3e36f2788281', label: 'C3\n3.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 690dd75f-a7c7-44dd-ab2a-3e36f2788281<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: 3.0 EXP  LN ; Ptgs: VALUE EXP  LN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: '10047561-e14e-4b5b-9d98-6c3f888e9a6f', label: 'EXP\n20.085536923187664', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 20.085536923187664<br>Type: FUNCTION<br>Id: 10047561-e14e-4b5b-9d98-6c3f888e9a6f<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: '673b376f-0615-436b-a614-8f6956ec2be1', label: 'B2\n20.085536923187664', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 20.085536923187664<br>Type: CELL_WITH_FORMULA<br>Id: 673b376f-0615-436b-a614-8f6956ec2be1<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: 3.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'},
{id: 'af5b36d3-fc84-4b62-b969-fefc2de0701f', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: af5b36d3-fc84-4b62-b969-fefc2de0701f<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@67ec8477'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '10047561-e14e-4b5b-9d98-6c3f888e9a6f', to: '673b376f-0615-436b-a614-8f6956ec2be1'},
{from: '673b376f-0615-436b-a614-8f6956ec2be1', to: '758889da-003e-45a1-bbe9-7860b0214c33'},
{from: 'af5b36d3-fc84-4b62-b969-fefc2de0701f', to: '10047561-e14e-4b5b-9d98-6c3f888e9a6f'},
{from: '758889da-003e-45a1-bbe9-7860b0214c33', to: '690dd75f-a7c7-44dd-ab2a-3e36f2788281'}
                            ]);