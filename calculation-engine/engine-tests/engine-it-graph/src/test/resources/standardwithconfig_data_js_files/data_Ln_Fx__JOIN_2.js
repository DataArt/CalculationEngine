var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '00452844-2070-4d74-aa74-c574af8c03d7', label: 'LN\n3.0', color: '#f0ad4e', title: 'Name: LN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 00452844-2070-4d74-aa74-c574af8c03d7<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: '7c7111d8-dcc0-45a3-a764-651c5e064537', label: 'B2\n20.085536923187664', color: '#31b0d5', title: 'Name: B2<br>Value: 20.085536923187664<br>Type: CELL_WITH_FORMULA<br>Id: 7c7111d8-dcc0-45a3-a764-651c5e064537<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: 3.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: '36697f1e-89ff-4bc7-9cf7-89539db42133', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 36697f1e-89ff-4bc7-9cf7-89539db42133<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: '1d04281b-524b-4578-9a62-2903d48cee87', label: 'EXP\n20.085536923187664', color: '#f0ad4e', title: 'Name: EXP<br>Value: 20.085536923187664<br>Type: FUNCTION<br>Id: 1d04281b-524b-4578-9a62-2903d48cee87<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: '78f92acd-e7a9-4bf9-a416-391dabb4cccc', label: 'C4\n3.000000153185454', color: '#31b0d5', title: 'Name: C4<br>Value: 3.000000153185454<br>Type: CELL_WITH_FORMULA<br>Id: 78f92acd-e7a9-4bf9-a416-391dabb4cccc<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: 20.08554 LN ; Ptgs: VALUE LN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: 'c0f08143-cbb0-4b8c-8bb0-c9f23a138ea2', label: 'VALUE\n20.08554', color: '#31b0d5', title: 'Name: VALUE<br>Value: 20.08554<br>Type: CONSTANT_VALUE<br>Id: c0f08143-cbb0-4b8c-8bb0-c9f23a138ea2<br>Formula Expression: Formula String: VALUE; Formula Values: 20.08554; Formula Ptg: 20.08554; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: '4db42361-0975-4e3b-b958-ce712dd93a68', label: 'C3\n3.0', color: '#31b0d5', title: 'Name: C3<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 4db42361-0975-4e3b-b958-ce712dd93a68<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: 3.0 EXP  LN ; Ptgs: VALUE EXP  LN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'},
{id: '5f53789d-9a9d-48ad-890c-faf75ccb1b56', label: 'LN\n3.000000153185454', color: '#f0ad4e', title: 'Name: LN<br>Value: 3.000000153185454<br>Type: FUNCTION<br>Id: 5f53789d-9a9d-48ad-890c-faf75ccb1b56<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c34402'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7c7111d8-dcc0-45a3-a764-651c5e064537', to: '00452844-2070-4d74-aa74-c574af8c03d7'},
{from: '00452844-2070-4d74-aa74-c574af8c03d7', to: '4db42361-0975-4e3b-b958-ce712dd93a68'},
{from: '1d04281b-524b-4578-9a62-2903d48cee87', to: '7c7111d8-dcc0-45a3-a764-651c5e064537'},
{from: '5f53789d-9a9d-48ad-890c-faf75ccb1b56', to: '78f92acd-e7a9-4bf9-a416-391dabb4cccc'},
{from: 'c0f08143-cbb0-4b8c-8bb0-c9f23a138ea2', to: '5f53789d-9a9d-48ad-890c-faf75ccb1b56'},
{from: '36697f1e-89ff-4bc7-9cf7-89539db42133', to: '1d04281b-524b-4578-9a62-2903d48cee87'}
                            ]);