**Test Case:  - Multiple Simultaneous Diagnoses - Multiple Simultaneous Diagnoses**

**Objective:** Verify the support for multiple simultaneous diagnoses on the same client and test the tool's behavior when multiple admin users attempt to diagnose the same client simultaneously.

**Preconditions:**
1. Multiple admin user accounts
2. Wi-Fi access point
3. Wireless client

**Test Steps:**
1. Log in to the application with Admin User 1 credentials.
2. Navigate to the Clients section from the navigation bar.
3. Click on Wireless Clients List.
4. Ensure that the Clients tab is selected.
5. Click on the Diagnostics tab.
6. Perform the following actions:
   - Enter the MAC address of the client device with connectivity issues in the Client MAC field.
   - Select a Venue from the drop-down list in the Venue field.
   - Click on the "Select" button in the Select APs field to display the AP list, and select an AP to communicate with the client and the controller.
   - Click on the "Trace Connectivity" button to start the troubleshooting process.
7. Observe the tool's behavior and note the displayed information and status of the client.
8. Log out of Admin User 1.

**Expected Results:**
- The Client Connectivity Diagnostics tool successfully initiates the troubleshooting process for the specified client.
- The tool displays information about the APs involved, including their MAC addresses, names, operating channels, and connection failures.
- The tool indicates the status of the client during the connection process accurately.
- The flow diagram shows the stages of the AP-client connection, and warnings or failures are correctly represented.
- The tool does not encounter any errors or unexpected behavior during the diagnosis.

**Test Steps (Simultaneous Diagnoses):**
1. Log in to the application with Admin User 2 credentials.
2. Repeat steps 2 to 7 from the previous test, simultaneously performing the same actions as Admin User 1.
3. Observe the tool's behavior and note any inconsistencies or conflicts encountered.

**Expected Results (Simultaneous Diagnoses):**
- The Client Connectivity Diagnostics tool allows multiple admin users to perform simultaneous diagnoses on the same client.
- The tool handles simultaneous diagnoses gracefully without interfering with each other's processes.
- Each admin user receives accurate information and status updates specific to their diagnosis.
- The tool maintains proper synchronization and does not encounter any errors or unexpected behavior when multiple admin users diagnose the same client simultaneously.
