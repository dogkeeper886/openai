Test Case: Client Connectivity Diagnostics - DPSK

Summary:
The test case focuses on the Client Connectivity Diagnostics tool with a specific emphasis on Dynamic Pre-Shared Key (DPSK) networks. The preconditions involve the presence of an active DPSK network, a compatible Wi-Fi access point configured with DPSK, and a wireless client device capable of DPSK authentication. The test steps include accessing the tool, entering the client's MAC address, selecting an access point, initiating the connectivity trace, and verifying the displayed information. The expected results encompass successful tool access, the presence of relevant input fields, accurate representation of AP-client connection stages, appropriate highlighting of warnings and failures, and the provision of pertinent information for diagnosing and troubleshooting client connectivity issues. The test case ensures the effectiveness of the Client Connectivity Diagnostics tool in the context of DPSK networks.

Preconditions:
1. Active DPSK network
2. Wi-Fi access point
3. Wireless client

Here's a step-by-step guide to creating a DPSK WLAN network:
1. On the navigation bar, click on "Wi-Fi" and then "Wi-Fi Networks" followed by "Wi-Fi Networks List".
2. Click on "Add Wi-Fi Network".
3. In the Network Details page, complete the following settings:
   - Network Name: Enter a name (up to 32 characters) for the network.
   - Network Type: Select "Dynamic Pre-Shared Key (DPSK)".
4. Click "Next" to proceed to the DPSK Settings page.
5. In the DPSK Settings page, complete the following settings:
   - Security Protocol: Select "WPA" or "WPA2(recommended)" from the drop-down list.
   - Use the DPSK Service: Enable this option and select an existing DPSK service from the drop-down list, or click "Add DPSK Service" to configure a new one.
   - Use the RADIUS Server: Enable this option and configure the RADIUS Server by selecting an existing server from the drop-down list or clicking "Add Server" to create a new one.
6. Click "Next" to proceed to the Venues page.
7. In the Venues page, select the venues in which you want to activate the network. You can activate the network in all venues or specific ones by setting the switch to ON.
8. Click "Apply" to save the settings.
9. Review the settings on the Summary page and make sure everything is configured correctly.
10. Finally, click "Finish" to create the DPSK-protected network.

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
The Client Connectivity Diagnostics tool is accessible through the provided steps.
The Diagnostics tab is displayed with the expected input fields.
Entering a valid MAC address and selecting an AP successfully initiates the connectivity trace.
The displayed items (AP MAC, AP Name, SSID, Radio, Failure Type) are correct and relevant.
The flow diagram accurately represents the different stages of the AP-client connection.
Colored arrows indicate warnings (yellow) or failures (red) during the connection process.
The tool analyzes frames and accurately identifies the specific stage causing the connection problems.
Information about the APs involved in the connection attempt is displayed correctly.
The client's status during the connection process is accurately represented.
Warnings and failures are appropriately highlighted in the flow diagram.
The tool provides relevant and accurate information for diagnosing and troubleshooting connectivity issues with client devices.