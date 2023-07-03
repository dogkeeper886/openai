Test Case: Client Connectivity Diagnostics - WPA2 Enterprise

Summary:
This test case focuses on verifying the functionality of the Client Connectivity Diagnostics tool, which is used to troubleshoot connectivity issues between a wireless client device and an access point (AP) in a DPSK network.

Requirements:
1. Have an AP to venue.
2. A wireless client to connect to WLAN.

Preconditions:
1. Creating a DPSK network.

Here's a step-by-step guide to creating a DPSK WLAN network:

1. On the navigation bar, click on "Wi-Fi" and then "Wi-Fi Networks" followed by "Wi-Fi Networks List". This will take you to the Networks page.

2. Click on "Add Wi-Fi Network" or select a DPSK network setting that you want to copy and click on "Clone" at the top of the table. This will open the Create New Network page.

3. In the Network Details page, complete the following settings:
   - Network Name: Enter a name (up to 32 characters) for the network.
   - Set different SSID: Optionally configure a different SSID from the network name.
   - Description: Enter a description (up to 64 characters) to help identify the network.
   - Network Type: Select "Dynamic Pre-Shared Key (DPSK)". This will display a structure diagram of a DPSK network.

4. Click "Next" to proceed to the DPSK Settings page.

5. In the DPSK Settings page, complete the following settings:
   - Security Protocol: Select "WPA" or "WPA2(recommended)" from the drop-down list.
   - Use the DPSK Service: Enable this option and select an existing DPSK service from the drop-down list, or click "Add DPSK Service" to configure a new one.
   - Use the RADIUS Server: Enable this option and configure the RADIUS Server by selecting an existing server from the drop-down list or clicking "Add Server" to create a new one.

6. Click "Show more settings" to expand additional options.

7. Complete the VLAN settings:
   - VLAN ID: Enter the VLAN ID number (default is 1) for the network.
   - VLAN Pooling: Toggle the switch to ON if you want to enable VLAN pooling.
   - Select VLAN Pooling: Select a VLAN pool from the drop-down list or click "Add Pool" to create a new VLAN pool.

8. Complete the services settings:
   - DNS Proxy: Toggle the switch to ON to enable the DNS proxy. Select an existing DNS proxy from the table or click "Add Rule" to create a new one.
   - Wi-Fi Calling: Toggle the switch to ON to enable Wi-Fi Calling. Click "Select Profiles" to configure the Wi-Fi Calling profiles.
   - Client Isolation: Toggle the switch to ON to enable client isolation. Configure the isolation packets and other relevant settings.

9. Complete the radio settings:
   - Hide SSID: Select this feature to hide the SSID.
   - Load Control: Configure the maximum rate, max clients per radio, and load balancing options.

10. Complete the access control settings:
   - Access Control: Choose from available options to configure Layer 2, Layer 3, Device & OS, Applications, and Client Rate Limit.

11. Enable or configure other optional features like OFDM only, Data Rate Control, Optimized Connectivity Experience (OCE), etc.

12. Click "Next" to proceed to the Venues page.

13. In the Venues page, select the venues in which you want to activate the network. You can activate the network in all venues or specific ones by setting the switch to ON.

14. Optionally, select specific AP groups and modify the radio band for the network.

15. Configure the scheduling for the network. You can choose a 24/7 schedule or customize it according to your requirements.

16. Click "Apply" to save the settings.

17. Review the settings on the Summary page and make sure everything is configured correctly.

18. Finally, click "Finish" to create the DPSK-protected network.

Test Steps:
1. Open the WEB GUI and navigate to the Client Connectivity Diagnostics tool.
2. Follow the provided steps to access the tool:
   - Enter the MAC address of the client device with connectivity issues in the Client MAC field.
   - Select a Venue from the drop-down list in the Venus field.
   - Click the "Select" button in the Select APs field to display the AP list.
   - Select an available AP from the list to establish communication between the client and the controller.
   - Click the "Trace Connectivity" button to start the troubleshooting process.
3. Verify that the following input fields are displayed in the Diagnostics tab:
   - Client (for MAC address)
   - Venue (drop-down list)
   - APs (click to display AP list to select)
   - "Trace connectivity" or "Stop" button
4. Ensure that the entered MAC address and selected AP successfully initiate the connectivity trace.
5. Verify that the following items are displayed during the troubleshooting process:
   - AP MAC
   - AP Name
   - SSID
   - Radio
   - Failure Type
6. Observe the flow diagram that depicts the different stages of the AP-client connection.
7. Ensure that colored arrows are used to indicate warnings (yellow) or failures (red) during the connection process.
8. Verify that the tool analyzes the frames exchanged between the client device and the selected APs.
9. Confirm that the tool accurately identifies the specific stage causing the connection problems.
10. Verify that information about the APs involved in the connection attempt is displayed, including their names, MAC addresses, operating channels, and connection failures.
11. Observe the status of the client during the connection process:
   - "Client is in a discovery state and not currently connected" (when the tool starts or when the client is already connected to an AP)
   - "Client is attempting a new connection" (when the target client sends an 802.11 authentication request frame to an AP to initiate a connection)
12. Validate that the tool accurately represents the connection status and updates it based on the client's actions.
13. Ensure that warnings and failures, such as time delays, unsupported EAP types, or connection failures, are appropriately highlighted in the flow diagram.
14. Complete the troubleshooting process and verify that the tool provides relevant and accurate information for diagnosing and troubleshooting connectivity issues with client devices.

Expected Results:
- The Client Connectivity Diagnostics tool is accessible through the provided steps.
- The Diagnostics tab is displayed with the expected input fields.
- Entering a valid MAC address and selecting an AP successfully initiates the connectivity trace.
- The displayed items (AP MAC, AP Name, SSID, Radio, Failure Type) are correct and relevant.
- The flow diagram accurately represents the different stages of the AP-client connection.
- Colored arrows indicate warnings (yellow) or failures (red) during the connection process.
- The tool analyzes frames and accurately identifies the specific stage causing the connection problems.
- Information about the APs involved in the connection attempt is displayed correctly.
- The client's status during the connection process is accurately represented.
- Warnings and failures are appropriately highlighted in the flow diagram.
- The tool provides relevant and accurate information for diagnosing and troubleshooting connectivity issues with client devices.