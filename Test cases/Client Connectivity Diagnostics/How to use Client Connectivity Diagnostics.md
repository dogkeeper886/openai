How to use Client Connectivity Diagnostics
Network administrators can analyze connection issues when client devices connect to network in real time.

The network administrator can access the Client Connectivity Diagnostics tool by following these steps:
1. From the navigation bar, click Clients to expand the menu.
2. Click Wireless Clients List.
3. By default, the Clients tab is selected. Click Diagnostics to switch tab.

The Diagnostics tab contains the following input fields:
- Client (for MAC address)
- Venue (drop-down list)
- APs (click to display AP list to select)
- "Trace connectivity" or "Stop" button

To troubleshoot client connections, perform the following steps:

1. In the Client MAC field, enter the MAC address of the client device with connectivity issues.
2. In the Venus field, select Venue from drop down list.
3. In the Select APs field, click "Select" to display the AP list and select an AP to communicate between the client and the controller.
4. Click "Trace Connectivity" to start the troubleshooting process.

During the troubleshooting process, the following items will be displayed:
- AP MAC
- AP Name
- SSID
- Radio
- Failure Type

The tool will analyze the frames exchanged between the client device and the selected APs to identify the specific stage causing the connection problems. The tool will also display information about the APs involved in the connection attempt, including their names, MAC addresses, operating channels and connection failures.

Additionally, the tool will indicate the status of the client during the connection process:
- "Client is in a discovery state and not currently connected" (when the tool starts or when the client is already connected to an AP)
- "Client is attempting a new connection" (when the target client sends an 802.11 authentication request frame to an AP to initiate a connection)

The tool provides a flow diagram that depicts different stages of the AP-client connection, showing the step-by-step exchange of information between devices. Colored arrows are used to indicate warnings (yellow) or failures (red) during the connection process. These warnings and failures can include time delays, failed negotiations for unsupported EAP types, or connection failures.

By using the Client Connectivity Diagnostics tool and analyzing the information provided, network administrators can diagnose and troubleshoot connectivity issues with client devices effectively.
