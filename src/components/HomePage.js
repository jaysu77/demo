import React, { useState } from "react";
import { defaultAccount, accounts, prefDocuments } from "../../static/mockData";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styles } from "../../static/css/styles";

const HomePage = () => {
  const [selectedAccountKey, setSelectedAccountKey] = useState(
    defaultAccount.data.default_accounts[0].account_key
  );
  const [isAscending, setIsAscending] = useState(true);

  const handleChange = (event) => {
    setSelectedAccountKey(event.target.value);
  };
  const handleSort = () => {
    setIsAscending(!isAscending);
    accountDocs.sort((a, b) => {
      if (a.document_type < b.document_type) return isAscending ? -1 : 1;
      if (a.document_type > b.document_type) return isAscending ? 1 : -1;
      return 0;
    });
  };

  const account = accounts.find(
    (account) => account.key === selectedAccountKey
  );

  const accountDocs =
    prefDocuments.find((doc) => doc.account_key === selectedAccountKey)?.docs ||
    [];

  return (
    <Box sx={styles.root}>
      <h1>Default Account</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Preference Type:</TableCell>
                <TableCell>
                  {defaultAccount.data.default_accounts[0].preference_type}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Account Key:</TableCell>
                <TableCell>
                  {defaultAccount.data.default_accounts[0].account_key}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Currency Code:</TableCell>
                <TableCell>
                  {defaultAccount.data.default_accounts[0].currency_code}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <h2>Default Account Document Preference Delivery</h2>
      <FormControl sx={styles.selectFormControl}>
        <InputLabel id="document-type-label">Document Type</InputLabel>
        <Select
          variant="standard"
          labelId="document-type-label"
          id="document-type-select"
          value={selectedAccountKey}
          onChange={handleChange}
        >
          {accounts.map((account) => (
            <MenuItem key={account.key} value={account.key}>
              {`${account.description} ${account.id} ${account.typeDesc}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <Button sx={styles.sortButton} variant="contained" onClick={handleSort}>
          {isAscending ? "Sort Ascending" : "Sort Descending"}
        </Button>
      </FormControl>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TableContainer component={Paper} sx={styles.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Document Type</TableCell>
                <TableCell>Delivery Method</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accountDocs.map((doc) => (
                <TableRow key={doc.document_type}>
                  <TableCell>{doc.document_type}</TableCell>
                  <TableCell>
                    {doc.is_paper_flag ? "Paper" : "Paperless"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default HomePage;
