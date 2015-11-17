var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8127cc90-155f-4033-8755-5568963914b3', label: 'VALUE\n20.08554', color: '#31b0d5', title: 'Name: VALUE<br>Value: 20.08554<br>Type: CONSTANT_VALUE<br>Id: 8127cc90-155f-4033-8755-5568963914b3<br>Formula Expression: Formula String: VALUE; Formula Values: 20.08554; Formula Ptg: 20.08554; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: '54607616-75ef-4e98-a349-c0c39121787b', label: 'C3\n3.0', color: '#31b0d5', title: 'Name: C3<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 54607616-75ef-4e98-a349-c0c39121787b<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: 3.0 EXP  LN ; Ptgs: VALUE EXP  LN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: 'a1e1bcb1-882c-47c4-b170-fe07449cbf42', label: 'B2\n20.085536923187664', color: '#31b0d5', title: 'Name: B2<br>Value: 20.085536923187664<br>Type: CELL_WITH_FORMULA<br>Id: a1e1bcb1-882c-47c4-b170-fe07449cbf42<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: 3.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: '89870102-6b29-4576-bd68-abca2a3bee83', label: 'EXP\n20.085536923187664', color: '#f0ad4e', title: 'Name: EXP<br>Value: 20.085536923187664<br>Type: FUNCTION<br>Id: 89870102-6b29-4576-bd68-abca2a3bee83<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: '2ffa7c3a-5767-4eb7-b5e7-661ad4cc7411', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 2ffa7c3a-5767-4eb7-b5e7-661ad4cc7411<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: 'a10390c1-d3b0-49ef-a9b7-cb6d318c4be8', label: 'C4\n3.000000153185454', color: '#31b0d5', title: 'Name: C4<br>Value: 3.000000153185454<br>Type: CELL_WITH_FORMULA<br>Id: a10390c1-d3b0-49ef-a9b7-cb6d318c4be8<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: 20.08554 LN ; Ptgs: VALUE LN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: 'bffb9e44-a849-4b6b-ba19-3019e72b4ac2', label: 'LN\n3.0', color: '#f0ad4e', title: 'Name: LN<br>Value: 3.0<br>Type: FUNCTION<br>Id: bffb9e44-a849-4b6b-ba19-3019e72b4ac2<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'},
{id: '96e9f6d5-589e-4046-a121-1d7ded9f417f', label: 'LN\n3.000000153185454', color: '#f0ad4e', title: 'Name: LN<br>Value: 3.000000153185454<br>Type: FUNCTION<br>Id: 96e9f6d5-589e-4046-a121-1d7ded9f417f<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e9804b9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '89870102-6b29-4576-bd68-abca2a3bee83', to: 'a1e1bcb1-882c-47c4-b170-fe07449cbf42'},
{from: '2ffa7c3a-5767-4eb7-b5e7-661ad4cc7411', to: '89870102-6b29-4576-bd68-abca2a3bee83'},
{from: '8127cc90-155f-4033-8755-5568963914b3', to: '96e9f6d5-589e-4046-a121-1d7ded9f417f'},
{from: 'a1e1bcb1-882c-47c4-b170-fe07449cbf42', to: 'bffb9e44-a849-4b6b-ba19-3019e72b4ac2'},
{from: 'bffb9e44-a849-4b6b-ba19-3019e72b4ac2', to: '54607616-75ef-4e98-a349-c0c39121787b'},
{from: '96e9f6d5-589e-4046-a121-1d7ded9f417f', to: 'a10390c1-d3b0-49ef-a9b7-cb6d318c4be8'}
                            ]);