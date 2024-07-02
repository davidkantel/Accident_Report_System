document.addEventListener('DOMContentLoaded', function() {
    fetchReports();
});

function fetchReports() {
    fetch('backend/get_reports.php')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('reportsTableBody');
            tableBody.innerHTML = '';

            data.forEach(report => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${report.id}</td>
                    <td>${report.date}</td>
                    <td>${report.time}</td>
                    <td>${report.location}</td>
                    <td>${report.description}</td>
                    <td>${report.status}</td>
                    <td>
                        <a href="report_edit.php?id=${report.id}" class="btn btn-warning btn-sm">Edit</a>
                        <button class="btn btn-danger btn-sm" onclick="deleteReport(${report.id})">Delete</button>
                    </td>
                `;

                tableBody.appendChild(row);
            });
        });
}

function deleteReport(id) {
    if (confirm('Are you sure you want to delete this report?')) {
        fetch(`backend/delete_report.php?id=${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    fetchReports();
                } else {
                    alert('Failed to delete report');
                }
            });
    }
}
