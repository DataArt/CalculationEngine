var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '82aab19e-f5f8-4a68-b657-de84912983db', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: 82aab19e-f5f8-4a68-b657-de84912983db<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@13d73fa'},
{id: '1aec5ae6-bf2b-4d41-bdcd-2f9c5e5a6bd3', label: 'F9\n4.0', color: '#31b0d5', title: 'Name: F9<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 1aec5ae6-bf2b-4d41-bdcd-2f9c5e5a6bd3<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: 116.41 COLUMN ; Ptgs: D6 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@13d73fa'},
{id: '86798aaa-b9b2-48e4-9b82-76b921ab9ca4', label: 'D6\n116.41', color: '#31b0d5', title: 'Name: D6<br>Value: 116.41<br>Type: CELL_WITH_VALUE<br>Id: 86798aaa-b9b2-48e4-9b82-76b921ab9ca4<br>Formula Expression: Formula String: D6; Formula Values: 116.41; Formula Ptg: 116.41; Ptgs: D6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@13d73fa'},
{id: 'eccfceac-9c2d-4dd6-a0c3-784bccb52710', label: 'COLUMN\n4.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 4.0<br>Type: FUNCTION<br>Id: eccfceac-9c2d-4dd6-a0c3-784bccb52710<br>Formula Expression: Formula String: COLUMN(D6); Formula Values: COLUMN(116.41); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@13d73fa'},
{id: 'f6c65c92-2771-4974-8708-fc9f366fcaae', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 3.0<br>Type: FUNCTION<br>Id: f6c65c92-2771-4974-8708-fc9f366fcaae<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@13d73fa'},
{id: 'be086d29-42b4-44d0-a82c-7bc050ab6feb', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: be086d29-42b4-44d0-a82c-7bc050ab6feb<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: 7702.0 COLUMN ; Ptgs: C5 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@13d73fa'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f6c65c92-2771-4974-8708-fc9f366fcaae', to: 'be086d29-42b4-44d0-a82c-7bc050ab6feb'},
{from: 'eccfceac-9c2d-4dd6-a0c3-784bccb52710', to: '1aec5ae6-bf2b-4d41-bdcd-2f9c5e5a6bd3'},
{from: '82aab19e-f5f8-4a68-b657-de84912983db', to: 'f6c65c92-2771-4974-8708-fc9f366fcaae'},
{from: '86798aaa-b9b2-48e4-9b82-76b921ab9ca4', to: 'eccfceac-9c2d-4dd6-a0c3-784bccb52710'}
                            ]);