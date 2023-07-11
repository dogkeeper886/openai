Test Case: Fast BSS transition in WPA3 SAE network

Summary:
The test involves following a step-by-step procedure to create a WPA3 SAE network with 802.11r FT enabled and performing a seamless client handover from the current AP to the target AP within the same Extended Service Set (ESS). The Client Connectivity Diagnostics tool is used to verify the successful initiation of the connectivity trace, display relevant information during the troubleshooting process, and ensure accurate representation of the AP-client connection status. The expected results include the proper functioning of the tool and the provision of accurate information for diagnosing and troubleshooting client connectivity issues in the FT scenario.

Preconditions:
1. Active WPA3 SAE network
2. The wireless client supports IEEE 802.11r and is configured to use FT.
3. The client is currently associated with an access point (AP) within the same Extended Service Set (ESS) that supports FT.
4. The target AP to which the client intends to roam also supports FT and belongs to the same ESS.

Here's a step-by-step guide to creating a WPA3 SAE WLAN network and enable 802.11r Fast BSS Transition:
1. On the navigation bar, click Wi-Fi > Wi-Fi Networks > Wi-Fi Networks List.
2. The Networks page will be displayed.
3. Click "Add Wi-Fi Network" or select a PSK network setting to clone from the table.
4. The Create New Network page will be displayed.
5. In the Network Details tab, complete the following settings:
   - Network Name: Enter a name (up to 32 characters) for the network.
   - Network Type: Select "Pre-Shared Key (PSK)".
6. Click "Next".
7. The PSK Settings tab will be displayed.
8. Complete the settings on the PSK Settings tab:
   - SAE Passphrase: Enter a minimum eight-character passphrase for users to access the network.
   - Security Protocol: Select "WPA3" as the security protocol.
9. Click "Show more settings"
   - Enable 802.11k neighbor reports.
   - Enable 802.11r Fast BSS Transition.
10. Click "Next" to move to the Venues page.
11. Configure the venues in which you want to activate this network.
12. Click "Next" to move to the Summary page.
13. Review the settings on the Summary page.
14. Click "Finish" to complete the process.

Here's a step-by-step procedure for a wireless client performing Fast BSS Transition (FT):
1. The wireless client detects that the signal strength from the current AP is degrading or below a predefined threshold, indicating the need to perform a handover.
2. The client scans the available APs within range to find a suitable target AP for roaming.
3. The client selects a target AP that supports FT and belongs to the same ESS. This can be based on factors such as signal strength, security configuration, or other defined criteria.
4. The client initiates the FT authentication process:
   a. The client sends an FT Authentication Request frame to the target AP, indicating its intent to perform FT.
   b. The FT Authentication Request frame includes the necessary information such as the client's Pairwise Master Key (PMK), the Mobility Domain (MD) identifier, and the client's MAC address.
   c. The target AP receives the FT Authentication Request frame and verifies the client's credentials, including the PMK and MD.
5. If the FT authentication is successful, the target AP responds with an FT Authentication Response frame, indicating acceptance of the client's request to perform FT.
6. The client receives the FT Authentication Response frame and verifies its validity. If the response is valid, the client proceeds to the next step.
7. The client initiates the FT reassociation process:
   a. The client sends an FT Reassociation Request frame to the target AP, requesting to associate with it using FT.
   b. The FT Reassociation Request frame includes the necessary information such as the client's MAC address, the Target AP's MAC address, and the Key Hierarchy information.
   c. The target AP receives the FT Reassociation Request frame and validates the client's credentials and the provided Key Hierarchy.
8. If the FT reassociation is successful, the target AP responds with an FT Reassociation Response frame, indicating acceptance of the client's request for FT reassociation.
9. The client receives the FT Reassociation Response frame and verifies its validity. If the response is valid, the client completes the FT process.
10. The client establishes a secure connection with the target AP and transfers the necessary encryption keys, including the Pairwise Transient Key (PTK) and Group Transient Key (GTK), to ensure secure communication with the new AP.
11. The client disassociates from the current AP, informing it about the successful FT process.
12. The client associates with the target AP and resumes communication with the network.

By following this procedure, a wireless client can perform a Fast BSS Transition, seamlessly roaming from one AP to another within the same ESS while maintaining the established connection and session continuity. It ensures uninterrupted connectivity, reduced latency, and improved user experience in mobility scenarios.

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