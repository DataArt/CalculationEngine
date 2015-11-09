var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '234adae3-eba2-4338-807b-0297279565e4', label: 'C3\n10.0', color: '#31b0d5', title: 'Name: C3<br>Value: 10.0<br>Type: CELL_WITH_FORMULA<br>Id: 234adae3-eba2-4338-807b-0297279565e4<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: 5.0  + 5.0 +; Ptgs: C1 C2 + C1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '750410db-6064-4475-b4c2-cb2afce422af', label: '+\n110.0', color: '#f0ad4e', title: 'Name: +<br>Value: 110.0<br>Type: OPERATOR<br>Id: 750410db-6064-4475-b4c2-cb2afce422af<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + 85.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '1a828c17-eaba-4143-9ad4-2bec872d3afb', label: '+\n5.0', color: '#f0ad4e', title: 'Name: +<br>Value: 5.0<br>Type: OPERATOR<br>Id: 1a828c17-eaba-4143-9ad4-2bec872d3afb<br>Formula Expression: Formula String: C1 + C2; Formula Values: 5.0 + ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '84d48b7d-83e7-4e70-872e-86f1426e7c7a', label: '+\n25.0', color: '#f0ad4e', title: 'Name: +<br>Value: 25.0<br>Type: OPERATOR<br>Id: 84d48b7d-83e7-4e70-872e-86f1426e7c7a<br>Formula Expression: Formula String: A1 + C1; Formula Values: 20.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '99ebf4d4-de0b-4b9c-a52a-c5d8ac29e79c', label: 'A4\n110.0', color: '#31b0d5', title: 'Name: A4<br>Value: 110.0<br>Type: CELL_WITH_FORMULA<br>Id: 99ebf4d4-de0b-4b9c-a52a-c5d8ac29e79c<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + 85.0; Formula Ptg: 20.0 5.0 + 85.0 +; Ptgs: A1 C1 + Sheet2!$B$1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'fae0f9f8-97e3-48c8-8d5e-d48872f02816', label: 'C2\n', color: '#31b0d5', title: 'Name: C2<br>Value: <br>Type: EMPTY_CELL<br>Id: fae0f9f8-97e3-48c8-8d5e-d48872f02816<br>Formula Expression: Formula String: C2; Formula Values: ; Formula Ptg: ; Ptgs: C2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '87c4a4ff-b08d-49b7-a8f2-c5a81706311b', label: '+\n55.0', color: '#f0ad4e', title: 'Name: +<br>Value: 55.0<br>Type: OPERATOR<br>Id: 87c4a4ff-b08d-49b7-a8f2-c5a81706311b<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '45102195-b5af-4c4c-8ff8-f245e1cc77e3', label: 'B1\n200.0', color: '#31b0d5', title: 'Name: B1<br>Value: 200.0<br>Type: CELL_WITH_VALUE<br>Id: 45102195-b5af-4c4c-8ff8-f245e1cc77e3<br>Formula Expression: Formula String: B1; Formula Values: 200.0; Formula Ptg: 200.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'a5b11ce4-095d-472b-84db-e0a730421297', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: a5b11ce4-095d-472b-84db-e0a730421297<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'da0b60fb-e6bf-4e0d-b7b4-4ca6f3d35bc1', label: 'B2\n300.0', color: '#31b0d5', title: 'Name: B2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: da0b60fb-e6bf-4e0d-b7b4-4ca6f3d35bc1<br>Formula Expression: Formula String: B2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '8953b7dc-48d3-473d-8966-175ecf5adeb4', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 8953b7dc-48d3-473d-8966-175ecf5adeb4<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '76cb060d-a9e1-45b1-9650-49a68eae5bab', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 76cb060d-a9e1-45b1-9650-49a68eae5bab<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '9be10df3-b15b-4276-a6c9-12c8651368ae', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 9be10df3-b15b-4276-a6c9-12c8651368ae<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '51ece4d5-a833-43a3-b3b3-65c69d42f661', label: '+\n10.0', color: '#f0ad4e', title: 'Name: +<br>Value: 10.0<br>Type: OPERATOR<br>Id: 51ece4d5-a833-43a3-b3b3-65c69d42f661<br>Formula Expression: Formula String: C1 + C2 + C1; Formula Values: 5.0 +  + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '200bb399-9efc-4ae7-8d66-2205915754d3', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: 200bb399-9efc-4ae7-8d66-2205915754d3<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'c943a389-6663-47db-998a-a2025d2b99c6', label: 'A3\n55.0', color: '#31b0d5', title: 'Name: A3<br>Value: 55.0<br>Type: CELL_WITH_FORMULA<br>Id: c943a389-6663-47db-998a-a2025d2b99c6<br>Formula Expression: Formula String: A1 + A2 + C1; Formula Values: 20.0 + 30.0 + 5.0; Formula Ptg: 20.0 30.0 + 5.0 +; Ptgs: A1 A2 + C1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '8dfd9048-4451-493b-a16e-4b17cf6f6350', label: 'Sheet2!$B$1\n85.0', color: '#31b0d5', title: 'Name: Sheet2!$B$1<br>Value: 85.0<br>Type: CELL_WITH_VALUE<br>Id: 8dfd9048-4451-493b-a16e-4b17cf6f6350<br>Formula Expression: Formula String: Sheet2!$B$1; Formula Values: 85.0; Formula Ptg: 85.0; Ptgs: Sheet2!$B$1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '6c15de9b-10fb-4217-9810-e7bcea7313bb', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 6c15de9b-10fb-4217-9810-e7bcea7313bb<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '8f8262a1-1e8a-477b-aa3e-f73c4e3ee8aa', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 8f8262a1-1e8a-477b-aa3e-f73c4e3ee8aa<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: 'baa0ca1a-22a1-41e3-be73-2d6531a0ea55', label: '+\n500.0', color: '#f0ad4e', title: 'Name: +<br>Value: 500.0<br>Type: OPERATOR<br>Id: baa0ca1a-22a1-41e3-be73-2d6531a0ea55<br>Formula Expression: Formula String: B1 + B2; Formula Values: 200.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '2efc9d95-703c-487f-931b-67fb1604f1c3', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 2efc9d95-703c-487f-931b-67fb1604f1c3<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '8514f258-7076-4560-ad4c-f41b0a64e039', label: 'B3\n505.0', color: '#31b0d5', title: 'Name: B3<br>Value: 505.0<br>Type: CELL_WITH_FORMULA<br>Id: 8514f258-7076-4560-ad4c-f41b0a64e039<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: 200.0 300.0 + 5.0 +; Ptgs: B1 B2 + C1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '2f97c541-23fa-4886-a9d1-a1a9d27cd877', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 2f97c541-23fa-4886-a9d1-a1a9d27cd877<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'},
{id: '30d3da50-a700-4e92-ba39-341d471f14fc', label: '+\n505.0', color: '#f0ad4e', title: 'Name: +<br>Value: 505.0<br>Type: OPERATOR<br>Id: 30d3da50-a700-4e92-ba39-341d471f14fc<br>Formula Expression: Formula String: B1 + B2 + C1; Formula Values: 200.0 + 300.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7aa44fa2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8953b7dc-48d3-473d-8966-175ecf5adeb4', to: '200bb399-9efc-4ae7-8d66-2205915754d3'},
{from: '9be10df3-b15b-4276-a6c9-12c8651368ae', to: '1a828c17-eaba-4143-9ad4-2bec872d3afb'},
{from: '8dfd9048-4451-493b-a16e-4b17cf6f6350', to: '750410db-6064-4475-b4c2-cb2afce422af'},
{from: '76cb060d-a9e1-45b1-9650-49a68eae5bab', to: '87c4a4ff-b08d-49b7-a8f2-c5a81706311b'},
{from: '6c15de9b-10fb-4217-9810-e7bcea7313bb', to: '51ece4d5-a833-43a3-b3b3-65c69d42f661'},
{from: '84d48b7d-83e7-4e70-872e-86f1426e7c7a', to: '750410db-6064-4475-b4c2-cb2afce422af'},
{from: 'da0b60fb-e6bf-4e0d-b7b4-4ca6f3d35bc1', to: 'baa0ca1a-22a1-41e3-be73-2d6531a0ea55'},
{from: '2f97c541-23fa-4886-a9d1-a1a9d27cd877', to: '84d48b7d-83e7-4e70-872e-86f1426e7c7a'},
{from: '200bb399-9efc-4ae7-8d66-2205915754d3', to: '87c4a4ff-b08d-49b7-a8f2-c5a81706311b'},
{from: 'fae0f9f8-97e3-48c8-8d5e-d48872f02816', to: '1a828c17-eaba-4143-9ad4-2bec872d3afb'},
{from: '2efc9d95-703c-487f-931b-67fb1604f1c3', to: '200bb399-9efc-4ae7-8d66-2205915754d3'},
{from: '1a828c17-eaba-4143-9ad4-2bec872d3afb', to: '51ece4d5-a833-43a3-b3b3-65c69d42f661'},
{from: '30d3da50-a700-4e92-ba39-341d471f14fc', to: '8514f258-7076-4560-ad4c-f41b0a64e039'},
{from: '8f8262a1-1e8a-477b-aa3e-f73c4e3ee8aa', to: '84d48b7d-83e7-4e70-872e-86f1426e7c7a'},
{from: 'baa0ca1a-22a1-41e3-be73-2d6531a0ea55', to: '30d3da50-a700-4e92-ba39-341d471f14fc'},
{from: '750410db-6064-4475-b4c2-cb2afce422af', to: '99ebf4d4-de0b-4b9c-a52a-c5d8ac29e79c'},
{from: 'a5b11ce4-095d-472b-84db-e0a730421297', to: '30d3da50-a700-4e92-ba39-341d471f14fc'},
{from: '87c4a4ff-b08d-49b7-a8f2-c5a81706311b', to: 'c943a389-6663-47db-998a-a2025d2b99c6'},
{from: '45102195-b5af-4c4c-8ff8-f245e1cc77e3', to: 'baa0ca1a-22a1-41e3-be73-2d6531a0ea55'},
{from: '51ece4d5-a833-43a3-b3b3-65c69d42f661', to: '234adae3-eba2-4338-807b-0297279565e4'}
                            ]);