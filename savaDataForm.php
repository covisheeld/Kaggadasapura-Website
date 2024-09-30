<?php
require 'vendor/autoload.php'; // Load PHPSpreadsheet library

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

// Capture JSON POST data
$data = json_decode(file_get_contents('php://input'), true);

// Create new spreadsheet object
$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();

// Set the headers for the Excel file
$sheet->setCellValue('A1', 'Name');
$sheet->setCellValue('B1', 'Email');
$sheet->setCellValue('C1', 'Message');

// Add the form data
$sheet->setCellValue('A2', $data['name']);
$sheet->setCellValue('B2', $data['email']);
$